import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderItem } from './entity/order-item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem) private itemRepo: Repository<OrderItem>,
  ) {}

  async createOrder(dto: CreateOrderDto, paymentSlip: string) {
    const order = this.orderRepo.create({
      ...dto,
      paymentSlip,
      items: dto.items.map((item) => this.itemRepo.create(item)),
    });

    return this.orderRepo.save(order);
  }
}
