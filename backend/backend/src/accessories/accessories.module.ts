import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoriesController } from './accessories.controller';
import { AccessoriesService } from './accessories.service';
import { Accessory } from './entity/accessaries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accessory])],
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
})
export class AccessoriesModule {}
