import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fashion } from './entity/fashion.entity';
import { FashionService } from './fashion.service';
import { FashionController } from './fashion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fashion])],
  providers: [FashionService],
  controllers: [FashionController],
})
export class FashionModule {}
