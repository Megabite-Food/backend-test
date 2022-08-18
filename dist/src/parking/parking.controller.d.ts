import { Parking } from "@prisma/client";
import { ParkingService } from "./parking.service";
export declare class ParkingController {
    private readonly parkingService;
    constructor(parkingService: ParkingService);
    create(createParkingDto: Parking): Promise<Parking>;
    findAll(): string;
    update(id: string, updateParkingDto: Parking): Promise<string>;
    remove(id: string): Promise<string>;
}
