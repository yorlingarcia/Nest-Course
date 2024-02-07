export const array = [1, 2, 3, 4, 5, 6];
// array.push(1)

export const object = {
  name: "Yorlin",
  id: 1,
  age: 23,
};

export interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const ppkemon: Pokemon = {
  id: 2,
  name: "Bulbasur",
  age: 12,
};
