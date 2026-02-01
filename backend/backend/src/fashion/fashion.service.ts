import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fashion } from './entity/fashion.entity';
import { CreateFashionDto } from './dto/create-fashion.dto';

@Injectable()
export class FashionService {
  constructor(
    @InjectRepository(Fashion)
    private fashionRepo: Repository<Fashion>,
  ) {}

  create(dto: CreateFashionDto) {
    const item = this.fashionRepo.create(dto);
    return this.fashionRepo.save(item);
  }

  findAll() {
    return this.fashionRepo.find();
  }
}
