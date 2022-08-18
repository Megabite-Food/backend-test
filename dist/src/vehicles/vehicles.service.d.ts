import { PrismaService } from "../prisma.service";
import { Vehicle } from "@prisma/client";
export declare class VehiclesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createVehicleDto: Vehicle): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(licensePlate: string): Promise<Vehicle>;
    update(licensePlate: string, updateVehicleDto: Vehicle): Promise<Vehicle>;
    remove(licensePlate: string): Promise<Vehicle>;
}
