import { Brand } from 'src/brands/entities/brand.entity';

import { UuidAdapter } from 'src/config/uuid.adapter';

export const BRANDS_SEED: Brand[] = [
  {
    id: UuidAdapter.v4(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: UuidAdapter.v4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: UuidAdapter.v4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: UuidAdapter.v4(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: UuidAdapter.v4(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
];
