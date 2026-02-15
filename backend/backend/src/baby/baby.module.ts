import { Module } from '@nestjs/common';
import { BabyService } from './baby.service';
import { BabyController } from './baby.controller';

@Module({
  providers: [BabyService],
  controllers: [BabyController]
})
export class BabyModule {}
