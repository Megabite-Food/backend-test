import { Module } from "@nestjs/common";
import { ParkingService } from "./parking.service";
import { PrismaService } from "../prisma.service";
import { ParkingController } from "./parking.controller";

@Module({
  controllers: [ParkingController],
  providers: [ParkingService, PrismaService],
})
export class ParkingModule {}
