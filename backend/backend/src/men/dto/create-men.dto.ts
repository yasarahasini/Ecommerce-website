import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateMenProductDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsArray()
  size: string[];

  @IsNumber()
  price: number;

  @IsString()
  image: string;
}
