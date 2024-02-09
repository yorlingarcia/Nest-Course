import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { UuidAdapter } from 'src/config/uuid.adapter';

@Injectable()
export class CarsService {
  constructor() {}
  private _cars: Car[] = [
    {
      id: UuidAdapter.v4(),
      brand: 'Toyota',
      model: 'Civic',
    },
    {
      id: UuidAdapter.v4(),
      brand: 'Honda',
      model: 'Corolla',
    },
    {
      id: UuidAdapter.v4(),
      brand: 'Jepp',
      model: 'Cherokee',
    },
  ];

  finAll() {
    return this._cars;
  }

  finOneById(id: string) {
    return this._cars.find((car) => car.id === id);
  }
}
