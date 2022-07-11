import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TipoVehiculoEntity } from "../entities/tipo-vehiculo.entity";

@Injectable()
export class TipoVehiculoService {
  constructor (
    @InjectRepository(TipoVehiculoEntity) private repository: Repository<TipoVehiculoEntity>
  ) { }

  async registrar(tipo: TipoVehiculoEntity): Promise<TipoVehiculoEntity> {
    const newTipo = this.repository.create(tipo);
    return await this.repository.save(tipo);
  }

  async lista(): Promise<TipoVehiculoEntity[]> {
    return await this.repository.find();
  }
}