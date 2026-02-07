import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectronicsController } from './electronic.controller';
import { ElectronicsService } from './electronic.service';
import { Electronic } from './entity/electronic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Electronic])],
  controllers: [ElectronicsController],
  providers: [ElectronicsService],
})
export class ElectronicModule {}
