import { IsNumber } from 'class-validator';

export class AccountDatatableRequestDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;

  name: string;

  email: string;

  username: string;

  campaignType: string;

  status: string;

  createdAtStart: string;

  createdAtEnd: string;

  platformId: number;
}
