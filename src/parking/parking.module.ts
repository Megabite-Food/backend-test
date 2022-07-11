import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstanciaController } from './controllers/estancia.controller';
import { TipoVehiculoController } from './controllers/tipo-vehiculo.controller';
import { VehiculoController } from './controllers/vehiculo.controller';
import { EstanciaEntity } from './entities/estancia.entity';
import { TarifaEntity } from './entities/tarifa.entity';
import { TipoVehiculoEntity } from './entities/tipo-vehiculo.entity';
import { VehiculoEntity } from './entities/vehiculo.entity';
import { EstanciaService } from './services/estancia.service';
import { TipoVehiculoService } from './services/tipo-vehiculo.service';
import { VehiculoService } from './services/vehiculo.service';
import * as moment from 'moment';
import { MomentToken } from './constantes';

@Module({
  imports: [
    TypeOrmModule.forFeature([ EstanciaEntity, TarifaEntity, TipoVehiculoEntity, VehiculoEntity])
  ],
  controllers: [
    TipoVehiculoController,
    VehiculoController,
    EstanciaController
  ],
  providers: [
    TipoVehiculoService,
    VehiculoService,
    EstanciaService,
    {
      provide: MomentToken,
      useValue: moment
    }
  ]
})
export class ParkingModule {}
