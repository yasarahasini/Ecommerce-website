import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Baby } from './entity/babyitems.entity';
import { BabyService } from './baby.service';
import { BabyController } from './baby.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Baby])],
  controllers: [BabyController],
  providers: [BabyService],
})
export class BabyModule {}
