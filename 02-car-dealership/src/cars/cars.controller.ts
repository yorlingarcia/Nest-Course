import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor() {}
  @Get()
  getAllCars() {
    return ['Toyota', 'Honda', 'Jeep'];
  }

  @Get(':id')
  getCarById(@Param('id') id) {
    console.log({ id });

    return { id };
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
