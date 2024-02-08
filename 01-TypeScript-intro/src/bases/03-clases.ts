import axios from "axios";

export class Pokemon {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get imageUrl(): string {
    return `thtp://pokemon.com/${this.id}`;
  }

  async getMoves() {
    // const moves = 10;
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
    return resp;
  }
}

export const bulbasur = new Pokemon(1, "Bulbasur");
