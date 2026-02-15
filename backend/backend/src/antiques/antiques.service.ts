import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Antique } from './entity/antiques.entity';
import { CreateAntiqueDto } from './dto/create-antiques.dto';
import { UpdateAntiqueDto } from './dto/update-antiques.dto';

@Injectable()
export class AntiquesService {
  constructor(
    @InjectRepository(Antique)
    private antiqueRepo: Repository<Antique>,
  ) {}

  create(dto: CreateAntiqueDto) {
    const antique = this.antiqueRepo.create(dto);
    return this.antiqueRepo.save(antique);
  }

  findAll() {
    return this.antiqueRepo.find({
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number) {
    const antique = await this.antiqueRepo.findOne({ where: { id } });
    if (!antique) throw new NotFoundException('Antique not found');
    return antique;
  }

  async update(id: number, dto: UpdateAntiqueDto) {
    await this.antiqueRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const antique = await this.findOne(id);
    return this.antiqueRepo.remove(antique);
  }
}
