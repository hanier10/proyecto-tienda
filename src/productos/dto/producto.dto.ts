import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @MaxLength(100) //longitud maxima
  @MinLength(3) //longitud minima
  producto: string;

  @IsString()
  @MaxLength(60)
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsNumber()
  marca_id: number;
}
