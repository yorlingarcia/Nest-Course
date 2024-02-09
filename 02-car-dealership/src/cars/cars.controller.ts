import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.finAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    const car = this.carsService.finOneById(id);
    if (!car) throw new NotFoundException(`Car whit id ${id} not found`);
    return { car };
  }

  @Post()
  createCar() {
    return ['create Car!!'];
  }

  @Put()
  updateCar() {
    return ['update Car!'];
  }
}
