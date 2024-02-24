import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'limit pagination to get rows in route',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'how many skip rows',
  })
  @IsOptional()
  @Min(0)
  // @IsPositive()
  @Type(() => Number)
  offset?: number;
}
