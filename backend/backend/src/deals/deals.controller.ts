import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { DealsService } from './deals.service';
import { CreateDealDto } from './dto/create-deals.dto';
import type { Request } from 'express';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/deals',
        filename: (
          _req: Request,
          file: Express.Multer.File,
          cb: (error: Error | null, filename: string) => void,
        ) => {
          const uniqueName =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueName + extname(file.originalname));
        },
      }),
    }),
  )
  create(
    @Body() dto: CreateDealDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.dealsService.create(dto, file?.filename);
  }

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }
}
