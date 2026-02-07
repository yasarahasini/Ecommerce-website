import { Module } from '@nestjs/common';
import { WomenService } from './women.service';
import { WomenController } from './women.controller';

@Module({
  providers: [WomenService],
  controllers: [WomenController]
})
export class WomenModule {}
