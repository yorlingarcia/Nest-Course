import { Car } from 'src/cars/interfaces/car.interface';
import { UuidAdapter } from 'src/config/uuid.adapter';

export const CARS_SEED: Car[] = [
  {
    id: UuidAdapter.v4(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: UuidAdapter.v4(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: UuidAdapter.v4(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
