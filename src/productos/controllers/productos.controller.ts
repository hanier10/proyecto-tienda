import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductosService } from '../services/productos.service';
import { CreateProductoDto } from '../dto/producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productoServicio: ProductosService) {}

  //Crear un registro
  @Post('crear')
  async crearProducto(@Body() productoDto: CreateProductoDto) {
    return await this.productoServicio.crearProducto(productoDto);
  }

  //Encontrar un registro
  @Get(':id') //string a numero
  async encontrarOne(@Param('id', ParseIntPipe) id: number) {
    return await this.productoServicio.encontrarUnProducto(id);
  }

  //Encontrar todos los registros
  @Get()
  async encontrarAll() {
    return await this.productoServicio.encontrarTodosLosProductos();
  }

  //Actualizar un registro
  @Put(':id')
  async actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() cambios: CreateProductoDto,
  ) {
    return await this.productoServicio.actualizarRegistro(id, cambios);
  }

  //Eliminar un registro
  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.productoServicio.eliminarRegistro(id);
  }
}
