import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Antique } from './entity/antiques.entity';
import { AntiquesService } from './antiques.service';
import { AntiquesController } from './antiques.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Antique])],
  controllers: [AntiquesController],
  providers: [AntiquesService],
})
export class AntiquesModule {}
