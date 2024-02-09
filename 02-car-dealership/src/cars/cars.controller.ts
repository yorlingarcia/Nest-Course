import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dt';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.finAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const car = this.carsService.finOneById(id);
    if (!car) throw new NotFoundException(`Car whit id ${id} not found`);
    return { car };
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return { createCarDto };
  }

  @Patch(':id')
  updateCarPatch(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      id,
      body,
    };
  }

  @Put(':id')
  updateCar(@Param('id', ParseIntPipe) id: number) {
    return { message: 'updated Car!', id };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { message: 'Car deleted!', id };
  }
}
