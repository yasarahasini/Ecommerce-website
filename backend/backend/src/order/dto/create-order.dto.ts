import { IsString, IsEmail, IsNumber, IsArray } from 'class-validator';

export class OrderItemDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  phone: string;

  @IsNumber()
  total: number;

  @IsArray()
  items: OrderItemDto[];
}
