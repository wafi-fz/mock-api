import { IsArray, IsNumber, IsString } from "class-validator";

export class MonitoringDatatableRequestDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;

  @IsNumber()
  status: number;

  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsArray()
  platforms: number[];

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}
