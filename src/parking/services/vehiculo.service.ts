import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { tipoVehiculoConst } from "../constantes";
import { TipoVehiculoEntity } from "../entities/tipo-vehiculo.entity";
import { VehiculoEntity } from "../entities/vehiculo.entity";

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(VehiculoEntity) private vehiculoRepository: Repository<VehiculoEntity>,
    @InjectRepository(TipoVehiculoEntity) private tipoVehiculoRepository: Repository<TipoVehiculoEntity>
  ) { }

  async registrarOficial(placa: string): Promise<VehiculoEntity> {
    let tipo = await this.tipoVehiculoRepository.findOne({
      where: { codigo: tipoVehiculoConst.oficial }
    });
    return await this.registrar(placa, tipo);
  }

  async registrarResidente(placa: string) {
    let tipo = await this.tipoVehiculoRepository.findOne({
      where: { codigo: tipoVehiculoConst.residente }
    });
    return await this.registrar(placa, tipo);
  }

  async registrar(placa: string, tipo: TipoVehiculoEntity): Promise<VehiculoEntity> {
    const vehiculo = this.vehiculoRepository.create({ 
      placa: placa,
      tipo: tipo,
      tiempoUsado: 0
    });
    return await this.vehiculoRepository.save(vehiculo);
  }

  async listar(): Promise<VehiculoEntity[]> {
    return await this.vehiculoRepository.find();
  }
}