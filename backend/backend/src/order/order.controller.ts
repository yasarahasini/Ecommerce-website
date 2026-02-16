/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { extname } from 'path';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

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
}
