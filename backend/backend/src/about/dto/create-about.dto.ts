import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateAboutDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  imageUrl: string;

  @IsBoolean()
  inStock: boolean;
}
