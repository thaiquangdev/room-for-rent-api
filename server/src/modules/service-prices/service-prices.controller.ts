import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CreateServicePriceDto } from 'src/modules/service-prices/dto/create-service-price.dto';
import { UpadteServicePriceDto } from 'src/modules/service-prices/dto/update-service-price.dto';
import { ServicePricesService } from 'src/modules/service-prices/service-prices.service';

@Controller('service-prices')
export class ServicePricesController {
  constructor(private readonly servicePriceService: ServicePricesService) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async createServicePrice(
    @Body() createServicePriceDto: CreateServicePriceDto,
  ) {
    return await this.servicePriceService.createServicePrice(
      createServicePriceDto,
    );
  }

  @UseGuards(AuthGuard)
  @Put('/update/:id')
  async updateServicePrice(
    @Param('id') id: string,
    @Body() updateServicePriceDto: UpadteServicePriceDto,
  ) {
    return await this.servicePriceService.updateServicePrice(
      updateServicePriceDto,
      id,
    );
  }

  @Get('/')
  async getServicePrices(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    return await this.servicePriceService.getAllServicePrice({ page, limit });
  }
}
