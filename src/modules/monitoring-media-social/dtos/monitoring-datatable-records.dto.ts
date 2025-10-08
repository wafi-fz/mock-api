import { IsNumber } from 'class-validator';

export class MonitoringDatatableRecordsRequestDto {
  @IsNumber()
  id: number;

  @IsNumber()
  platformId: number;

  @IsNumber()
  year: number;

  @IsNumber()
  month: number;
}
