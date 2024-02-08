import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    const paramId = +id;
    if (isNaN(paramId)) return { error: 'Id should must be a number' };
    const car = this.carsService.cars.find((car) => car.id === paramId);
    if (!car) return { error: `Car whit id ${paramId} not found` };
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
