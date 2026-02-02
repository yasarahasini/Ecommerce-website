import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';
import { Deal } from './entity/deals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal])],
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {}
