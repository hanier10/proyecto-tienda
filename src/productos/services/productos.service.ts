import { Injectable, NotFoundException } from '@nestjs/common';
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

  //encontrar un registro
  async encontrarUnProducto(id: number) {
    const producto = await this.productoRepo.findOne({
      where: { id },
    });

    if (!producto) {
      throw new NotFoundException(`No existe el registro con el id ${id}`);
    }

    return producto;
  }

  //encontrar todos los registros
  encontrarTodosLosProductos() {
    return this.productoRepo.find({
      order: { id: 'ASC' },
    });
  }

  //eliminar un registro
  async eliminarRegistro(id: number) {
    const eliminar = await this.encontrarUnProducto(id); //encuentro
    await this.productoRepo.remove(eliminar); //elimino
    return 'Registro eliminado con exito'; //retornar un mensaje
  }

  //actualizar un registro
  async actualizarRegistro(id: number, cambios: CreateProductoDto) {
    const viejoRegistro = await this.encontrarUnProducto(id); //encuentro
    const nuevoRegistro = this.productoRepo.merge(viejoRegistro, cambios); //fusion
    return await this.productoRepo.save(nuevoRegistro); //guardo
  }
}
