import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [VehiclesModule, ParkingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
