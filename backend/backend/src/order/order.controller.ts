/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { extname } from 'path';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Create new order with payment slip
  @Post()
  @UseInterceptors(
    FileInterceptor('paymentSlip', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  createOrder(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    const dto: CreateOrderDto = {
      fullName: body.fullName,
      email: body.email,
      address: body.address,
      city: body.city,
      phone: body.phone,
      total: parseFloat(body.total),
      items: JSON.parse(body.items),
    };

    return this.orderService.createOrder(dto, file.filename);
  }

  // Get single order by ID
  @Get(':id')
  async getOrder(@Param('id', ParseIntPipe) id: number) {
    const order = await this.orderService.getOrderById(id);
    if (!order) throw new NotFoundException(`Order with ID ${id} not found`);
    return order;
  }
}
