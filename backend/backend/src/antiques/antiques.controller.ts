import { Controller,
     Get, 
     Post,
      Body,
  Param,
       Patch, 
       Delete 
    // eslint-disable-next-line prettier/prettier
    } from 
'@nestjs/common';
import { AntiquesService } from './antiques.service';
import { CreateAntiqueDto } from './dto/create-antiques.dto';
import { UpdateAntiqueDto } from './dto/update-antiques.dto';

@Controller('antiques')
export class AntiquesController {
  constructor(private readonly antiquesService: AntiquesService) {}

  @Post()
  create(@Body() dto: CreateAntiqueDto) {
    return this.antiquesService.create(dto);
  }

  @Get()
  findAll() {
    return this.antiquesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antiquesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAntiqueDto) {
    return this.antiquesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antiquesService.remove(+id);
  }
}
