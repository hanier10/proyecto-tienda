import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductosController } from './controllers/productos.controller';
import { ProductosService } from './services/productos.service';

//Estructura de un modulo
@Module({
  //el arroba es un decorador
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [TypeOrmModule, ProductosModule],
})
export class ProductosModule {}
