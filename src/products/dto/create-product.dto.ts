import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString() // ตรวจสอบว่าเป็น string ไหม
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsNumber() // ตรวจสอบว่าเป็น integer ไหม
  readonly price: number;
}
