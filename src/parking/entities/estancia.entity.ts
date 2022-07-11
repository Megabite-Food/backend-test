import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VehiculoEntity } from "./vehiculo.entity";

@Entity()
export class EstanciaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  entrada: Date;

  @Column()
  salida: Date | null;

  @Column()
  tiempoTotal: number;

  @Column()
  activo: boolean;

  @OneToOne(t => VehiculoEntity, v => v.id)
  @JoinColumn()
  vehiculo: VehiculoEntity;

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;
}