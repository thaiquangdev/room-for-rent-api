import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { CreateReportDto } from 'src/modules/reports/dto/create-report.dto';
import { Report } from 'src/modules/reports/report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async createReport(createReportDto: CreateReportDto) {
    const post = await this.postRepository.findOne({
      where: { id: createReportDto.postId },
    });

    if (!post) {
      throw new BadRequestException('Bài đăng không tồn tại');
    }

    const reportExist = await this.reportRepository.findOne({
      where: {
        email: createReportDto.email,
        phoneNumber: createReportDto.phoneNumber,
        post,
      },
    });

    if (reportExist) {
      throw new BadRequestException('Bạn đã báo cáo bài đăng này');
    }

    const newReport = this.reportRepository.create({
      fullName: createReportDto.fullName,
      phoneNumber: createReportDto.fullName,
      email: createReportDto.email,
      reason: createReportDto.email,
      moreDescription: createReportDto.moreDescription,
      post,
    });

    await this.reportRepository.save(newReport);

    return {
      message: 'Bạn đã báo cáo bài đăng này thành công',
    };
  }

  async getReports(query: { page: string; limit: string }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await this.reportRepository.findAndCount({
      skip,
      take: limit,
    });

    return {
      page,
      limit,
      total,
      data,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getReportDetail(reportId: string) {
    const report = await this.reportRepository.findOne({
      where: { id: reportId },
    });

    if (!report) {
      throw new BadRequestException('Không tìm thấy báo cáo');
    }

    return report;
  }

  async resolveReport(reportId: string, status: string) {
    const report = await this.reportRepository.findOne({
      where: { id: reportId },
    });

    if (!report) {
      throw new BadRequestException('Không tìm thấy báo cáo');
    }

    const post = await this.postRepository.findOne({
      where: {
        id: report.post.id,
      },
    });

    if (!post) {
      throw new BadRequestException('Không tìm thấy bài đăng');
    }

    if (status === 'Đã chấp nhận') {
      report.status = status;
      post.isActive = false;
    } else {
      report.status = status;
    }

    await this.postRepository.save(post);
    await this.reportRepository.save(report);

    return {
      message: 'Xử lý báo cáo bài đăng thành công',
    };
  }
}
