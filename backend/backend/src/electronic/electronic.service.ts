import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Electronic } from './entity/electronic.entity';
import { CreateElectronicDto } from './dto/create-electronic.dto';

@Injectable()
export class ElectronicsService {
  constructor(
    @InjectRepository(Electronic)
    private electronicRepo: Repository<Electronic>,
  ) {}

  create(dto: CreateElectronicDto) {
    const electronic = this.electronicRepo.create(dto);
    return this.electronicRepo.save(electronic);
  }

  findAll() {
    return this.electronicRepo.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: number) {
    return this.electronicRepo.findOneBy({ id });
  }

  findByCategory(category: string) {
    return this.electronicRepo.find({ where: { category } });
  }

  remove(id: number) {
    return this.electronicRepo.delete(id);
  }
}
