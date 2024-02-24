import { IsString, MinLength } from 'class-validator';

export class newMesssageDto {
  @IsString()
  @MinLength(1)
  message: string;
}
