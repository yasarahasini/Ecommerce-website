import { Module } from '@nestjs/common';
import { ElectronicService } from './electronic.service';
import { ElectronicController } from './electronic.controller';

@Module({
  providers: [ElectronicService],
  controllers: [ElectronicController]
})
export class ElectronicModule {}
