import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private _cars = [
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

  get cars() {
    return this._cars;
  }
}
