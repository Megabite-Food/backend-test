import { Body, Controller, Get, Post } from "@nestjs/common";
import { VehiculoEntity } from "../entities/vehiculo.entity";
import { VehiculoService } from "../services/vehiculo.service";

class VehiculoRequest {
  placa: string;
}

@Controller('api/parking/vehiculo/')
export class VehiculoController {
  constructor(private service: VehiculoService) {}

  @Get('')
  async listar(): Promise<VehiculoEntity[]> {
    return await this.service.listar();
  }

  @Post('oficial')
  async registrarOficial(@Body() vehiculo: VehiculoRequest): Promise<VehiculoEntity> {
    return await this.service.registrarOficial(vehiculo.placa);
  }

  @Post('residente')
  async registrarResidente(@Body() vehiculo: VehiculoRequest): Promise<VehiculoEntity> {
    return await this.service.registrarResidente(vehiculo.placa);
  }
}