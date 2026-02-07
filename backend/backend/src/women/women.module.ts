import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomenController } from './women.controller';
import { WomenService } from './women.service';
import { WomenProduct } from './entities/women-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WomenProduct])],
  controllers: [WomenController],
  providers: [WomenService],
})
export class WomenModule {}
