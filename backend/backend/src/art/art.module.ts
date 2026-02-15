import { Module } from '@nestjs/common';
import { ArtService } from './art.service';

@Module({
  providers: [ArtService]
})
export class ArtModule {}
