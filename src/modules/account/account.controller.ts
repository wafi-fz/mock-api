import { DsStandardResponse } from '@/helpers/ds-standard-response';
import DsWrapResponseInterceptor from '@/interceptors/ds-wrap-response.interceptor';
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Param,
  Get,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AccountRequestDto } from './dtos/account-request.dto';
import { AccountDatatableRequestDto } from './dtos/account-datatable-request.dto';

@ApiTags('Account')
@UseInterceptors(DsWrapResponseInterceptor)
@Controller('api/account')
export default class AccountController {
  @Post()
  @ApiBody({
    type: AccountRequestDto,
    description: 'Account Request Body',
    examples: {
      'Example 1': {
        summary: 'Example account request',
        value: {
          platformId: 1,
          name: 'Nurdiana Septiana',
          email: 'nurdiana.septiana@gmail.com',
          username: 'nurdiana.septiana12',
          accountPassword: '************',
          emailPassword: '************',
          proxyCity: 'Jakarta',
          twoFaCode: 'E35K DACR R6RX PW5X K56E UCPJ 5EE5 GHU3',
          cookies: 'text',
          campaignType: 'Collaboration',
        },
      },
    },
  })
  async account(@Body() body: AccountRequestDto): Promise<any> {
    const data = {
      id: '545f456f-f0e0-40db-b8c8-991dcc22898e',
      platformId: body.platformId,
      name: body.name,
      email: body.email,
      username: body.username,
      accountPassword: body.accountPassword,
      emailPassword: body.emailPassword,
      proxyCity: body.proxyCity,
      twoFaCode: body.twoFaCode,
      cookies: body.cookies,
      campaignType: body.campaignType,
      createdAt: new Date().toISOString(),
      status: 'sehat',
    };

    return DsStandardResponse(200, 'ok', data);
  }

  @Post('datatable')
  @ApiBody({
    type: AccountDatatableRequestDto,
    description: 'Account Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Account Datatable Request Body Example',
        value: {
          page: 1,
          limit: 10,
          name: 'Nurdiana',
          email: '',
          username: 'nurdiana.septiana12',
          campaignType: 'Collaboration',
          status: 'sehat',
          createdAtStart: '2023-01-01',
          createdAtEnd: '2023-12-31',
          platformId: 1,
        },
      },
    },
  })
  async datatable(@Body() body: AccountDatatableRequestDto): Promise<any> {
    const data = [
      {
        id: '545f456f-f0e0-40db-b8c8-991dcc22898e',
        platformId: 1,
        name: body.name,
        email: body.email,
        username: body.username,
        accountPassword: '************',
        emailPassword: '************',
        proxyCity: 'Jakarta',
        twoFaCode: 'E35K DACR R6RX PW5X K56E UCPJ 5EE5 GHU3',
        cookies: 'text',
        campaignType: 'Collaboration',
        createdAt: '2023-05-01T10:00:00Z',
        status: 'sehat',
      },

      {
        id: '645f456f-f0e0-40db-b8c8-991dcc22898e',
        platformId: 5,
        name: body.name,
        email: body.email,
        username: body.username,
        accountPassword: '************',
        emailPassword: '************',
        proxyCity: 'Jakarta',
        twoFaCode: 'E35K DACR R6RX PW5X K56E UCPJ 5EE5 GHU3',
        cookies: 'text',
        campaignType: 'Collaboration',
        createdAt: '2023-05-01T10:00:00Z',
        status: 'terblokir',
      },
    ];

    return DsStandardResponse(200, 'ok', data, data.length);
  }

  @Get('detail/:id')
  @ApiOperation({ summary: 'Get account detail by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    example: '545f456f-f0e0-40db-b8c8-991dcc22898e',
  })
  async detail(@Param('id') id: string): Promise<any> {
    const data = {
      id: id,
      platformId: 1,
      name: 'Nurdiana Septiana',
      email: '',
      username: 'nurdiana.septiana12',
      accountPassword: '************',
      emailPassword: '************',
      proxyCity: 'Jakarta',
      twoFaCode: 'E35K DACR R6RX PW5X K56E UCPJ 5EE5 GHU3',
      cookies: 'text',
      campaignType: 'Collaboration',
      createdAt: '2023-05-01T10:00:00Z',
      status: 'sehat',
    };

    return DsStandardResponse(200, 'ok', data);
  }

  @Put('update/:id')
  @ApiOperation({ summary: 'Update account by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    example: '545f456f-f0e0-40db-b8c8-991dcc22898e',
  })
  @ApiBody({
    type: AccountRequestDto,
    description: 'Account Update Request Body',
    examples: {
      'Example 1': {
        summary: 'Example account update request',
        value: {
          platformId: 1,
          name: 'Nurdiana Septiana',
          email: '',
          username: 'nurdiana.septiana12',
          accountPassword: '************',
          emailPassword: '************',
          proxyCity: 'Jakarta',
          twoFaCode: 'E35K DACR R6RX PW5X K56E UCPJ 5EE5 GHU3',
          cookies: 'text',
          campaignType: 'Collaboration',
          createdAt: '2023-05-01T10:00:00Z',
          status: 'sehat',
        },
      },
    },
  })
  async update(@Param('id') id: string, @Body() body: AccountRequestDto) {
    const data = {
      id: '545f456f-f0e0-40db-b8c8-991dcc22898e',
      platformId: body.platformId,
      name: body.name,
      email: body.email,
      username: body.username,
      accountPassword: body.accountPassword,
      emailPassword: body.emailPassword,
      proxyCity: body.proxyCity,
      twoFaCode: body.twoFaCode,
      cookies: body.cookies,
      campaignType: body.campaignType,
      createdAt: new Date().toISOString(),
      status: 'sehat',
    };

    return DsStandardResponse(200, 'ok', data);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete account by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    example: '545f456f-f0e0-40db-b8c8-991dcc22898e',
  })
  async delete(@Param('id') id: string): Promise<any> {
    return DsStandardResponse(200, 'ok');
  }
}
