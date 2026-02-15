import { IsString, IsNumber } from 'class-validator';

export class CreateAntiqueDto {
  @IsString()
  name: string;

  @IsString()
  era: string;

  @IsString()
  origin: string;

  @IsNumber()
  price: number;

  @IsString()
  img: string;

  @IsString()
  category: string;

  @IsString()
  condition: 'Excellent' | 'Good' | 'Fair';
}
