import { IsNumber, IsString } from 'class-validator';

export class AccountRequestDto {
  @IsNumber()
  platformId: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  username: string;

  @IsString()
  accountPassword: string;

  @IsString()
  emailPassword: string;

  @IsString()
  proxyCity: string;

  @IsString()
  twoFaCode: string;

  @IsString()
  cookies: string;

  @IsString()
  campaignType: string;
}
