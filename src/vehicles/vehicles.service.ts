import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Vehicle } from "@prisma/client";
@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  async create(createVehicleDto: Vehicle) {
    const vehicle = await this.prisma.vehicle.create({
      data: {
        licensePlate: createVehicleDto.licensePlate,
        vehicleTypeId: createVehicleDto.vehicleTypeId,
        active: true,
      },
    });
    return vehicle;
  }

  async findAll() {
    const vehicles = await this.prisma.vehicle.findMany({
      where: { active: true },
    });
    return vehicles;
  }

  async findOne(licensePlate: string) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { licensePlate },
    });
    return vehicle;
  }

  async update(licensePlate: string, updateVehicleDto: Vehicle) {
    const vehicle = await this.prisma.vehicle.update({
      where: { licensePlate: licensePlate },
      data: {
        vehicleTypeId: updateVehicleDto.vehicleTypeId,
      },
    });
    return vehicle;
  }

  // soft delete
  async remove(licensePlate: string) {
    const vehicle = await this.prisma.vehicle.update({
      where: { licensePlate: licensePlate },
      data: {
        active: false,
      },
    });
    return vehicle;
  }
}
