import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn('increment') //llave primaria
  id: number;

  @Column({ type: 'varchar', length: 100 }) //decorador para las columnas
  producto: string;

  @Column({ type: 'varchar', length: 60 })
  descripcion: string;

  @Column({ type: 'int8' })
  precio: number;

  @Column({ type: 'int8' })
  stock: number;
}
