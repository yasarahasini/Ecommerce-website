import { Module } from '@nestjs/common';
import { MenService } from './men.service';
import { MenController } from './men.controller';

@Module({
  providers: [MenService],
  controllers: [MenController]
})
export class MenModule {}
