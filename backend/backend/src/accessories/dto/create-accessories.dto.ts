import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAccessoryDto {
  @IsNotEmpty()
  name: string;

  @Type(() => Number)
  @IsNumber()
  price: number;
}
