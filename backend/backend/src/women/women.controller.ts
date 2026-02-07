import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WomenService } from './women.service';
import { CreateWomenProductDto } from './dto/create-women-product.dto';

@Controller('women-products')
export class WomenController {
  constructor(private readonly womenService: WomenService) {}

  @Post()
  create(@Body() dto: CreateWomenProductDto) {
    return this.womenService.create(dto);
  }

  @Get()
  findAll() {
    return this.womenService.findAll();
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string) {
    return this.womenService.findByCategory(category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.womenService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.womenService.remove(id);
  }
}
