import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Art } from './entity/art.entity';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';

@Injectable()
export class ArtService {
  constructor(
    @InjectRepository(Art)
    private readonly artRepo: Repository<Art>,
  ) {}

  create(dto: CreateArtDto) {
    const art = this.artRepo.create(dto);
    return this.artRepo.save(art);
  }

  findAll() {
    return this.artRepo.find({
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number) {
    const art = await this.artRepo.findOne({ where: { id } });
    if (!art) throw new NotFoundException('Art not found');
    return art;
  }

  async update(id: number, dto: UpdateArtDto) {
    await this.artRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const art = await this.findOne(id);
    return this.artRepo.remove(art);
  }
}
