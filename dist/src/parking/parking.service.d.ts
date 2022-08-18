import { PrismaService } from "../prisma.service";
import { Parking } from "@prisma/client";
export declare class ParkingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createParkingDto: Parking): Promise<Parking>;
    findAll(): string;
    findOne(licensePlate: string): string;
    findByTypeAndDate(id: number, date: Date): Promise<Parking[]>;
    findByType(id: number): Promise<Parking[]>;
    findByLicencePlate(licensePlate: string): Promise<Parking[]>;
    update(id: number, updateParkingDto: Parking): Promise<string>;
    remove(id: number): Promise<string>;
}
