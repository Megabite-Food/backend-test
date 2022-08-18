import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Parking } from "@prisma/client";

@Injectable()
export class ParkingService {
  constructor(private prisma: PrismaService) {}

  async create(createParkingDto: Parking) {
    const parking = await this.prisma.parking.create({
      data: {
        dateStart: new Date(Date.now()),
        dateFinish: undefined,
        licensePlate: createParkingDto.licensePlate,
        active: true,
      },
    });
    return parking;
  }
  findAll() {
    return "Not implemented";
  }
  findOne(licensePlate: string) {
    return "Not implemented";
  }
  async findByTypeAndDate(id: number, date: Date) {
    const parking = await this.prisma.parking.findMany({
      where: {
        dateFinish: {
          lte: date,
        },
        active: true,
        vehicle: { vehicleTypeId: id },
      },
    });
    return parking;
  }

  async findByType(id: number) {
    const parking = await this.prisma.parking.findMany({
      where: { active: true, vehicle: { vehicleTypeId: id } },
    });
    return parking;
  }

  async findByLicencePlate(licensePlate: string) {
    const parking = await this.prisma.parking.findMany({
      where: { licensePlate: licensePlate, active: true },
    });
    return parking;
  }

  async update(id: number, updateParkingDto: Parking) {
    return `This action updates a #${id} parking`;
  }

  async remove(id: number) {
    return `This action removes a #${id} parking`;
  }
}
