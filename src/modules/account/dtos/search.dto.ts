import { IsArray, IsNumber, IsString } from "class-validator";

export class SearchDto {
  @IsString()
  keyword: string;

  @IsNumber()
  categoryType: number;

  @IsArray()
  platforms: number[];

  @IsArray()
  domain: string[];

  @IsNumber()
  crawlingType: number;
}
