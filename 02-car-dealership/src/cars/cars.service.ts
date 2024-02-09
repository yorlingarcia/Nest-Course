import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private _cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Civic',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Corolla',
    },
    {
      id: 3,
      brand: 'Jepp',
      model: 'Cherokee',
    },
  ];

  finAll() {
    return this._cars;
  }

  finOneById(id: number) {
    return this._cars.find((car) => car.id === id);
  }
}
