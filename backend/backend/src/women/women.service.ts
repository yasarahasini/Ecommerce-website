import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WomenProduct } from './entity/women.entity';
import { CreateWomenProductDto } from './dto/create-women.dto';

@Injectable()
export class WomenService {
  constructor(
    @InjectRepository(WomenProduct)
    private womenRepo: Repository<WomenProduct>,
  ) {}

  create(dto: CreateWomenProductDto) {
    const product = this.womenRepo.create(dto);
    return this.womenRepo.save(product);
  }

  findAll() {
    return this.womenRepo.find({ order: { createdAt: 'DESC' } });
  }

  findByCategory(category: string) {
    return this.womenRepo.find({ where: { category } });
  }

  findOne(id: number) {
    return this.womenRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.womenRepo.delete(id);
  }
}
