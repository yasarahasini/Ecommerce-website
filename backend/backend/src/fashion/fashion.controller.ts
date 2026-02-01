import { Controller, Post, Get, Body } from '@nestjs/common';
import { FashionService } from './fashion.service';
import { CreateFashionDto } from './dto/create-fashion.dto';

@Controller('fashion')
export class FashionController {
  constructor(private fashionService: FashionService) {}

  // POST /fashion
  @Post()
  createFashion(@Body() dto: CreateFashionDto) {
    return this.fashionService.create(dto);
  }

  // GET /fashion
  @Get()
  getAllFashion() {
    return this.fashionService.findAll();
  }
}
