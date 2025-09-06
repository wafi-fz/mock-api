import { IsArray, IsBoolean, IsString } from "class-validator";
import { SearchDto } from "./search.dto";

export class MonitoringRequestDto {
  @IsString()
  title: string;

  @IsArray()
  search: SearchDto[];

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  userId: string;

  @IsBoolean()
  infinity: boolean;

  @IsBoolean()
  isAutoPublish: boolean;
}