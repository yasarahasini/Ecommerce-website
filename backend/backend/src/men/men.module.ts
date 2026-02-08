import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenController } from './men.controller';
import { MenService } from './men.service';
import { MenProduct } from './entity/men.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenProduct])],
  controllers: [MenController],
  providers: [MenService],
})
export class MenModule {}
