import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Baby } from './entity/babyitems.entity';
import { CreateBabyDto } from './dto/create-babyitems.dto';
import { UpdateBabyDto } from './dto/update-babyitems.dto';

@Injectable()
export class BabyService {
  constructor(
    @InjectRepository(Baby)
    private babyRepo: Repository<Baby>,
  ) {}

  create(dto: CreateBabyDto) {
    const item = this.babyRepo.create(dto);
    return this.babyRepo.save(item);
  }

  findAll(category?: string) {
    if (category && category !== 'All') {
      return this.babyRepo.find({
        where: { category },
        order: { id: 'DESC' },
      });
    }

    return this.babyRepo.find({
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number) {
    const item = await this.babyRepo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  async update(id: number, dto: UpdateBabyDto) {
    await this.babyRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    return this.babyRepo.remove(item);
  }
}
