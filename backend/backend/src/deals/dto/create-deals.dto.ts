import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDealDto {
  @IsNotEmpty()
  title: string;

  @Type(() => Number)
  @IsNumber()
  originalPrice: number;

  @Type(() => Number)
  @IsNumber()
  discountPrice: number;
}
