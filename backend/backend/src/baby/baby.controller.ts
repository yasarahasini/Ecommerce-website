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
import { BabyService } from './baby.service';
import { CreateBabyDto } from './dto/create-babyitems.dto';
import { UpdateBabyDto } from './dto/update-babyitems.dto';

@Controller('baby')
export class BabyController {
  constructor(private readonly babyService: BabyService) {}

  @Post()
  create(@Body() dto: CreateBabyDto) {
    return this.babyService.create(dto);
  }

  @Get()
  findAll(@Query('category') category?: string) {
    return this.babyService.findAll(category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.babyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBabyDto) {
    return this.babyService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.babyService.remove(+id);
  }
}
