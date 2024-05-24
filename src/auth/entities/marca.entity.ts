import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Marca {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  marca: string;
}
