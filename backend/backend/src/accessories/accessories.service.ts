import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accessory } from './entity/accessaries.entity';
import { CreateAccessoryDto } from './dto/create-accessories.dto';

@Injectable()
export class AccessoriesService {
  constructor(
    @InjectRepository(Accessory)
    private accessoryRepo: Repository<Accessory>
  ) {}

  async create(dto: CreateAccessoryDto, image?: string) {
    const accessory = this.accessoryRepo.create({
      ...dto,
      image,
    });

    return this.accessoryRepo.save(accessory);
  }

  async findAll() {
    return this.accessoryRepo.find({
      order: { createdAt: 'DESC' },
    });
  }
}
