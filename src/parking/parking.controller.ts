import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Parking } from "@prisma/client";
import { ParkingService } from "./parking.service";

@Controller("parking")
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Post()
  create(@Body() createParkingDto: Parking) {
    return this.parkingService.create(createParkingDto);
  }

  @Get()
  findAll() {
    return this.parkingService.findAll();
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.parkingService.findOne(+id);
  // }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateParkingDto: Parking) {
    return this.parkingService.update(+id, updateParkingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.parkingService.remove(+id);
  }
}
