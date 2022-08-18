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
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let VehiclesService = class VehiclesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createVehicleDto) {
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
    async findOne(licensePlate) {
        const vehicle = await this.prisma.vehicle.findUnique({
            where: { licensePlate },
        });
        return vehicle;
    }
    async update(licensePlate, updateVehicleDto) {
        const vehicle = await this.prisma.vehicle.update({
            where: { licensePlate: licensePlate },
            data: {
                vehicleTypeId: updateVehicleDto.vehicleTypeId,
            },
        });
        return vehicle;
    }
    async remove(licensePlate) {
        const vehicle = await this.prisma.vehicle.update({
            where: { licensePlate: licensePlate },
            data: {
                active: false,
            },
        });
        return vehicle;
    }
};
VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VehiclesService);
exports.VehiclesService = VehiclesService;
//# sourceMappingURL=vehicles.service.js.map