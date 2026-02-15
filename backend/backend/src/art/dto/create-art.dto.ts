import { IsString, IsNumber } from 'class-validator';

export class CreateArtDto {
  @IsString()
  name: string;

  @IsString()
  artist: string;

  @IsNumber()
  price: number;

  @IsString()
  img: string;

  @IsString()
  category: string;
}
