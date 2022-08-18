import { VehiclesService } from "./vehicles.service";
import { Vehicle } from "@prisma/client";
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(createVehicleDto: Vehicle): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findOne(id: string): Promise<Vehicle>;
    update(id: string, updateVehicleDto: Vehicle): Promise<Vehicle>;
    remove(id: string): Promise<Vehicle>;
}
