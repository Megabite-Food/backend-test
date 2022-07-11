import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [
    ParkingModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'parking.db',
      entities: [__dirname + "/**/*.entity{.ts,.js}"]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
