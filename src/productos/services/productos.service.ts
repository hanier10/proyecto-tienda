import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from '../entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto } from '../dto/producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {} // el constructor es lo primero que se ejecuta

  //el servicio aloja toda la logica
  //metodo para crear un registro
  async crearProducto(productoDto: CreateProductoDto) {
    const producto = this.productoRepo.create(productoDto);
    await this.productoRepo.save(producto); //guardar

    return producto; //retornar
  }
}
