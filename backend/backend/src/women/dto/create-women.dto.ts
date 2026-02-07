import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateWomenProductDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsArray()
  size: string[];

  @IsNumber()
  price: number;

  @IsString()
  modelUrl: string;
}
