import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ArtService } from './art.service';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';

@Controller('art')
export class ArtController {
  constructor(private readonly artService: ArtService) {}

  @Post()
  create(@Body() dto: CreateArtDto) {
    return this.artService.create(dto);
  }

  @Get()
  async findAll(@Query('category') category?: string) {
    const items = await this.artService.findAll();

    if (category && category !== 'All Art') {
      return items.filter((item) => item.category === category);
    }

    return items;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateArtDto) {
    return this.artService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artService.remove(+id);
  }
}
