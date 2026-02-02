import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deal } from './entity/deals.entity';
import { CreateDealDto } from './dto/create-deals.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal)
    private dealRepo: Repository<Deal>,
  ) {}

  create(dto: CreateDealDto, image?: string) {
    const deal = this.dealRepo.create({
      ...dto,
      image,
    });

    return this.dealRepo.save(deal);
  }

  findAll() {
    return this.dealRepo.find({
      order: { createdAt: 'DESC' },
    });
  }
}
