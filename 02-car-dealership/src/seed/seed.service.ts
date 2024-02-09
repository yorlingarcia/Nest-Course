import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';
// import { CreateSeedDto } from './dto/create-seed.dto';
// import { UpdateSeedDto } from './dto/update-seed.dto';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}
  populateDB() {
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'Seed execute';
  }
  // create(createSeedDto: CreateSeedDto) {
  //   return 'This action adds a new seed';
  // }

  // findAll() {
  //   return `This action returns all seed`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} seed`;
  // }

  // update(id: number, updateSeedDto: UpdateSeedDto) {
  //   return `This action updates a #${id} seed`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} seed`;
  // }
}
