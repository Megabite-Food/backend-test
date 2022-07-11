import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TipoVehiculoEntity } from "./tipo-vehiculo.entity";

@Entity()
export class TarifaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto: number;

  @OneToOne(t => TipoVehiculoEntity, t => t.id)
  @JoinColumn()
  tipo: TipoVehiculoEntity;

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;
}