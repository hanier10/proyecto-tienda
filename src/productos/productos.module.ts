import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
//Estructura de un modulo
@Module({
  //el arroba es un decorador
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule, ProductosModule],
})
export class ProductosModule {}
