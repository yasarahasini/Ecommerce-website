import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
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
  findAll(@Query('category') category?: string) {
    if (category && category !== 'All Art') {
      return this.artService.findAll().then(items =>
        items.filter(item => item.category === category),
      );
    }
    return this.artService.findAll();
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
