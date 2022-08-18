import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
// import { VehiclesService } from "./vehicles/vehicles.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService // private readonly userService: VehiclesService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
