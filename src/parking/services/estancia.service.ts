import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { EstanciaEntity } from "../entities/estancia.entity";
import { VehiculoEntity } from "../entities/vehiculo.entity";
import * as moment from "moment";
import { SalidaEstancia } from "../models/salida-estancia";
import { tipoVehiculoConst } from "../constantes";

@Injectable()
export class EstanciaService {
  constructor(
    @InjectRepository(EstanciaEntity) private estanciaRepository: Repository<EstanciaEntity>,
    @InjectRepository(VehiculoEntity) private vehiculoRepository: Repository<VehiculoEntity>
  ) { }

  async lista(): Promise<EstanciaEntity[]> {
    return await this.estanciaRepository.find();
  }

  async iniciar(placa: string): Promise<EstanciaEntity> {
    const vehiculo = await this.vehiculoRepository.findOne({
      where: { placa: placa }
    });
    const estancia = this.estanciaRepository.create({ 
      vehiculo: vehiculo,
      entrada: new Date(),
      tiempoTotal: 0,
      activo: true
    });
    return await this.estanciaRepository.save(estancia);
  }

  async cerrar(placa: string): Promise<SalidaEstancia> {
    const vehiculo = await this.vehiculoRepository.findOne({
      where: { placa: placa }
    });
    let estancia = await this.estanciaRepository.findOne({
      where: { vehiculo: { id: vehiculo.id } , activo: true }
    });
    estancia.salida = new Date();
    estancia.activo = false;
    let entrada = moment(estancia.entrada);
    let salida = moment(estancia.salida);
    estancia.tiempoTotal = salida.diff(entrada, 'minutes');

    vehiculo.tiempoUsado += estancia.tiempoTotal;

    await this.estanciaRepository.update(estancia.id, estancia);
    await this.vehiculoRepository.update(vehiculo.id, vehiculo);

    const result: SalidaEstancia = {
      tiempo: estancia.tiempoTotal,
      costo: 0
    };
    if (vehiculo.tipo.codigo != tipoVehiculoConst.oficial && vehiculo.tipo.codigo != tipoVehiculoConst.residente) {
      result.costo = estancia.tiempoTotal * 0.5;
    }

    return result;
  }

  async clear(): Promise<void> {
    const vehiculoQuery = this.vehiculoRepository.createQueryBuilder()
                            .update()
                            .set({ tiempoUsado: 0 });
    const estanciaQuery = this.estanciaRepository.createQueryBuilder()
                            .delete();
    await vehiculoQuery.execute();
    await estanciaQuery.execute();
  }
}