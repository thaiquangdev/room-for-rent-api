import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHighlightDto } from 'src/modules/highlights/dto/create-highlight.dto';
import { Highlight } from 'src/modules/highlights/highlight.entity';
import { Repository } from 'typeorm';
import slugify from 'slugify';
import { UpdateHighlightDto } from 'src/modules/highlights/dto/update-highlight.dto';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,
  ) {}

  async createHighligh(
    createHighlighDto: CreateHighlightDto,
  ): Promise<Highlight> {
    const highlightSlug = slugify(createHighlighDto.name, { lower: true });
    const highlightExist = await this.highlightRepository.findOne({
      where: {
        highlightSlug,
      },
    });

    if (highlightExist) {
      throw new HttpException(
        'Đặc điểm nổi bật này đã tồn tại',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newHighlight = this.highlightRepository.create({
      highlightName: createHighlighDto.name,
      highlightSlug,
    });

    return await this.highlightRepository.save(newHighlight);
  }

  async updateHighlight(
    updateHighlightDto: UpdateHighlightDto,
    id: string,
  ): Promise<Highlight> {
    const highlightSlug = slugify(updateHighlightDto.name, { lower: true });

    const highlightExist = await this.highlightRepository.findOne({
      where: {
        id,
      },
    });

    if (!highlightExist) {
      throw new HttpException(
        'Đặc điểm nổi bật này không tồn tại trong hệ thống',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (highlightExist.highlightSlug === highlightSlug) {
      throw new HttpException(
        'Tên đặc điểm nổi bật này đã tồn tại trong hệ thống',
        HttpStatus.BAD_REQUEST,
      );
    }

    highlightExist.highlightName =
      updateHighlightDto.name || highlightExist.highlightName;
    highlightExist.highlightSlug =
      highlightSlug || highlightExist.highlightSlug;

    return await this.highlightRepository.save(highlightExist);
  }

  async getHighlights(query: { page?: string; limit?: string }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit);

    if (!limit || limit <= 0) {
      const data = await this.highlightRepository.find();
      const total = data.length;

      return {
        data,
        total,
        page: null,
        limit: null,
        totalPages: 1,
      };
    }

    const skip = (page - 1) * limit;

    const [data, total] = await this.highlightRepository.findAndCount({
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
