import { ParkingService } from './parking.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
export declare class ParkingController {
    private readonly parkingService;
    constructor(parkingService: ParkingService);
    create(createParkingDto: CreateParkingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateParkingDto: UpdateParkingDto): string;
    remove(id: string): string;
}
