import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { UuidAdapter } from 'src/config/uuid.adapter';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  constructor() {}
  private _cars: Car[] = [
    // {
    //   id: UuidAdapter.v4(),
    //   brand: 'Toyota',
    //   model: 'Civic',
    // },
    // {
    //   id: UuidAdapter.v4(),
    //   brand: 'Honda',
    //   model: 'Corolla',
    // },
    // {
    //   id: UuidAdapter.v4(),
    //   brand: 'Jepp',
    //   model: 'Cherokee',
    // },
  ];

  finAll() {
    return this._cars;
  }

  finOneById(id: string) {
    const car = this._cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car whit id ${id} not found`);
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: UuidAdapter.v4(),
      ...createCarDto,
    };
    this._cars.push(car);
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.finOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car Id is not valid inside body`);
    }
    this._cars = this._cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  deleteCar(id: string) {
    // return this._cars.splice(this._cars.indexOf(this.finOneById(id)), 1);
    const car = this.finOneById(id);
    this._cars = this._cars.filter((car) => car.id !== id);
    return car;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this._cars = cars;
  }
}
