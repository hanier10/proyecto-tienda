import { Body, Controller, Post } from "@nestjs/common";
import { ProductosService } from "../services/productos.service";
import { CreateProductoDto } from "../dto/producto.dto";

@Controller('productos')
export class ProductosController{
    constructor(
        private readonly productoServicio: ProductosService
    ){}

    @Post('crear')
    async crearProducto(@Body() productoDto: CreateProductoDto){
        return await this.productoServicio.crearProducto(productoDto);
    };
}