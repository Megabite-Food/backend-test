import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
export declare class ParkingService {
    create(createParkingDto: CreateParkingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateParkingDto: UpdateParkingDto): string;
    remove(id: number): string;
}
