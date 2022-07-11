import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TipoVehiculoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;
}
