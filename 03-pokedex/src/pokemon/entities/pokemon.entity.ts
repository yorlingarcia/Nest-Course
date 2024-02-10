import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  name: string;
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
