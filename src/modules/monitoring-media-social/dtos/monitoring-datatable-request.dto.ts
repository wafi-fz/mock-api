import { IsNumber, IsString } from 'class-validator';

export class MonitoringDatatableRequestDto {
  @IsString()
  monitoringId: string;

  @IsString()
  accountName: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  description: string;

  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
