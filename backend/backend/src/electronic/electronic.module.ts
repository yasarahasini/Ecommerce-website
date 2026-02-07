import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectronicsController } from './electronics.controller';
import { ElectronicsService } from './electronics.service';
import { Electronic } from './entities/electronic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Electronic])],
  controllers: [ElectronicsController],
  providers: [ElectronicsService],
})
export class ElectronicsModule {}
