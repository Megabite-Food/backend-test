import { Body, Controller, Get, Post } from "@nestjs/common";
import { TipoVehiculoEntity } from "../entities/tipo-vehiculo.entity";
import { TipoVehiculoService } from "../services/tipo-vehiculo.service";

@Controller('api/parking/tipo-vehiculo/')
export class TipoVehiculoController {
  constructor(private service: TipoVehiculoService) {}

  @Post('')
  async registrar(@Body() tipo: TipoVehiculoEntity): Promise<TipoVehiculoEntity> {
    return await this.service.registrar(tipo);
  }

  @Get('')
  async listar(): Promise<TipoVehiculoEntity[]> {
    return await this.service.lista();
  }
}