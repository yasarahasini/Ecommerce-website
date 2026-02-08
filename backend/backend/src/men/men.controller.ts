import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MenService } from './men.service';
import { CreateMenProductDto } from './dto/create-men.dto';

@Controller('men-products')
export class MenController {
  constructor(private readonly menService: MenService) {}

  @Post()
  create(@Body() dto: CreateMenProductDto) {
    return this.menService.create(dto);
  }

  @Get()
  findAll() {
    return this.menService.findAll();
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string) {
    return this.menService.findByCategory(category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.menService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.menService.remove(id);
  }
}
