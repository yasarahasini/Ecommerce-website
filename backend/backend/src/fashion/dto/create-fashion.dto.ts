import { IsString } from 'class-validator';

export class CreateFashionDto {
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  image: string;
}
