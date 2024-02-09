import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `brand is required` })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
