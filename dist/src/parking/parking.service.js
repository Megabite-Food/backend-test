"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ParkingService = class ParkingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createParkingDto) {
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
    findOne(licensePlate) {
        return "Not implemented";
    }
    async findByTypeAndDate(id, date) {
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
    async findByType(id) {
        const parking = await this.prisma.parking.findMany({
            where: { active: true, vehicle: { vehicleTypeId: id } },
        });
        return parking;
    }
    async findByLicencePlate(licensePlate) {
        const parking = await this.prisma.parking.findMany({
            where: { licensePlate: licensePlate, active: true },
        });
        return parking;
    }
    async update(id, updateParkingDto) {
        return `This action updates a #${id} parking`;
    }
    async remove(id) {
        return `This action removes a #${id} parking`;
    }
};
ParkingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParkingService);
exports.ParkingService = ParkingService;
//# sourceMappingURL=parking.service.js.map