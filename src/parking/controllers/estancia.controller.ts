import { Body, Controller, Get, Post } from "@nestjs/common";
import { EstanciaEntity } from "../entities/estancia.entity";
import { EstanciaService } from "../services/estancia.service";

class EstanciaRequest {
  placa: string;
}

@Controller('api/parking/estancia/')
export class EstanciaController {
  constructor(private service: EstanciaService) { }

  @Get('')
  async listar(): Promise<EstanciaEntity[]> {
    return await this.service.lista();
  }

  @Post('entrada')
  async registrarEntrada(@Body() estancia: EstanciaRequest): Promise<EstanciaEntity> {
    return await this.service.iniciar(estancia.placa);
  }

  @Post('salida')
  async registrarSalida(@Body() estancia: EstanciaRequest): Promise<any> {
    return await this.service.cerrar(estancia.placa);
  }

  @Post('inicia-mes')
  async iniciaMas(): Promise<any> {
    await this.service.clear();

    return {
      success: true
    };
  }
}