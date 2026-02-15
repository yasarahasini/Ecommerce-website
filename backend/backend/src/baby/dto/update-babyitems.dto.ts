import { PartialType } from '@nestjs/mapped-types';
import { CreateBabyDto } from './create-babyitems.dto';

export class UpdateBabyDto extends PartialType(CreateBabyDto) {}
