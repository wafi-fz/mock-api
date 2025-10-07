import { IsArray, IsNumber, IsString } from 'class-validator';

export class MonitoringDatatablePublicMetricsRequestDto {
  @IsString()
  monitoringId: string;

  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;

  @IsNumber()
  status: number;

  @IsString()
  crawlingType: string;

  @IsArray()
  sort: string[];
}
