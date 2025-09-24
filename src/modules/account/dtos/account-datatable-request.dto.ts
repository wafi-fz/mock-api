import { IsNumber } from 'class-validator';

export class AccountDatatableRequestDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
