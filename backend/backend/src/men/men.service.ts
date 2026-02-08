import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenProduct } from './entity/men.entity';
import { CreateMenProductDto } from './dto/create-men.dto';

@Injectable()
export class MenService {
  constructor(
    @InjectRepository(MenProduct)
    private menRepo: Repository<MenProduct>,
  ) {}

  create(dto: CreateMenProductDto) {
    const product = this.menRepo.create(dto);
    return this.menRepo.save(product);
  }

  findAll() {
    return this.menRepo.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: number) {
    return this.menRepo.findOneBy({ id });
  }

  findByCategory(category: string) {
    return this.menRepo.find({ where: { category } });
  }

  remove(id: number) {
    return this.menRepo.delete(id);
  }
}
