import { Injectable } from '@nestjs/common';
// import { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
// import { PokemonService } from 'src/pokemon/pokemon.service';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  // private readonly axios: AxiosInstance;
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>, // private readonly pokemonService: PokemonService,
  ) {}
  async executeSeed() {
    await this.pokemonModel.deleteMany();
    const data: PokeResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    ).then((resp) => resp.json());

    const dataSeed: { name: string; no: number }[] = data.results.map(
      ({ name, url }) => {
        const segments = url.split('/');
        const no: number = +segments[segments.length - 2];
        return {
          name,
          no,
        };
      },
    );

    try {
      await this.pokemonModel.insertMany(dataSeed);
    } catch (error) {
      console.log({ error });
    }

    // this.pokemonService.fillPokemonsWithSeedData(dataSeed);

    return `seed execute`;
  }
}
