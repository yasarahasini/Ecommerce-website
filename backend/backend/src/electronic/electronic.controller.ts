import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ElectronicsService } from './electronics.service';
import { CreateElectronicDto } from './dto/create-electronic.dto';

@Controller('electronics')
export class ElectronicsController {
  constructor(private readonly electronicsService: ElectronicsService) {}

  @Post()
  create(@Body() dto: CreateElectronicDto) {
    return this.electronicsService.create(dto);
  }

  @Get()
  findAll() {
    return this.electronicsService.findAll();
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string) {
    return this.electronicsService.findByCategory(category);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.electronicsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.electronicsService.remove(id);
  }
}
