import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServicePriceDto } from 'src/modules/service-prices/dto/create-service-price.dto';
import { UpadteServicePriceDto } from 'src/modules/service-prices/dto/update-service-price.dto';
import { ServicePrice } from 'src/modules/service-prices/service-price.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicePricesService {
  constructor(
    @InjectRepository(ServicePrice)
    private readonly servicePriceRepository: Repository<ServicePrice>,
  ) {}

  async createServicePrice(createServicePriceDto: CreateServicePriceDto) {
    const servicePriceExist = await this.servicePriceRepository.findOne({
      where: { name: createServicePriceDto.name },
    });

    if (servicePriceExist) {
      throw new BadRequestException(
        'Gói bài đăng này đã tồn tại trong hệ thống',
      );
    }

    const newServicePrice = this.servicePriceRepository.create({
      name: createServicePriceDto.name,
      priceDay: createServicePriceDto.priceDay,
      priceWeek: createServicePriceDto.priceWeek,
      priceMonth: createServicePriceDto.priceMonth,
      pricePushPost: createServicePriceDto.pricePushPost,
      titleColor: createServicePriceDto.titleColor,
      postSize: createServicePriceDto.postSize,
      autoBrowse: createServicePriceDto.autoBrowse,
      showButtonCall: createServicePriceDto.showButtonCall,
      priority: createServicePriceDto.priority,
    });

    await this.servicePriceRepository.save(newServicePrice);

    return {
      message: 'Tạo mới gói bài đăng thành công',
    };
  }

  async getAllServicePrice(query: { page: string; limit: string }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await this.servicePriceRepository.find({
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(Number(total) / limit),
    };
  }

  async updateServicePrice(
    updateServicePriceDto: UpadteServicePriceDto,
    id: string,
  ) {
    const servicePriceExist = await this.servicePriceRepository.findOne({
      where: {
        name: updateServicePriceDto.name,
      },
    });

    if (!servicePriceExist) {
      throw new BadRequestException(
        'Gói bài đăng không tồn tại trong hệ thống',
      );
    }

    const updated = await this.servicePriceRepository.preload({
      id,
      ...updateServicePriceDto,
    });

    if (!updated) {
      throw new NotFoundException('Không tìm thấy gói để cập nhật');
    }

    await this.servicePriceRepository.save(updated);

    return {
      message: 'Cập nhật gói thành công',
    };
  }
}
