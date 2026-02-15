import { PartialType } from '@nestjs/mapped-types';
import { CreateAntiqueDto } from './create-antiques.dto';

export class UpdateAntiqueDto extends PartialType(CreateAntiqueDto) {}
