import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EstanciaEntity } from "./estancia.entity";
import { TipoVehiculoEntity } from "./tipo-vehiculo.entity";

@Entity()
export class VehiculoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;

  @Column()
  tiempoUsado: number;

  @OneToOne(t => TipoVehiculoEntity, t => t.id, { eager: true })
  @JoinColumn()
  tipo: TipoVehiculoEntity;

  @OneToMany(t => EstanciaEntity, e => e.id)
  @JoinColumn()
  estancias: EstanciaEntity[];

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;
}