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
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
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
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCarPatch(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createCarDto: CreateCarDto,
  ) {
    return createCarDto;
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
