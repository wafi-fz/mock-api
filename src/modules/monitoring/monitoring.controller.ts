import { DsStandardResponse } from '@/helpers/ds-standard-response';
import DsWrapResponseInterceptor from '@/interceptors/ds-wrap-response.interceptor';
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Param,
  Get,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { MonitoringRequestDto } from './dtos/monitoring-request.dto';
import { MonitoringDatatableRequestDto } from './dtos/monitoring-datatable-request.dto';

@ApiTags('Monitoring')
@UseInterceptors(DsWrapResponseInterceptor)
@Controller('api/monitoring')
export default class MonitoringController {
  @Post()
  @ApiBody({
    type: MonitoringRequestDto,
    description: 'Monitoring Request Body',
    examples: {
      monitoringExample: {
        summary: 'Monitoring Request Body Example',
        value: {
          title: 'test',
          search: [
            {
              keyword: 'test',
              categoryType: 1,
              platforms: [1, 2, 3, 4, 5, 6],
              domain: [],
              crawlingType: 1,
            },
          ],
          startDate: '04/09/2025',
          endDate: '05/09/2025',
          userId: '0',
          infinity: false,
          isAutoPublish: true,
        },
      },
    },
  })
  async monitoring(@Body() body: MonitoringRequestDto): Promise<any> {
    const response = DsStandardResponse(200, 'ok', {
      id: '545f456f-f0e0-40db-b8c8-991dcc22898e',
      title: body.title,
      keyword: body.search[0].keyword,
      categoryType: body.search[0].categoryType,
      platforms: body.search[0].platforms,
      status: 0,
      startDate: '2025-09-04',
      endDate: '2025-09-05',
      userId: body.userId,
      durationType: body.infinity ? 0 : 1,
    });

    return response;
  }

  @Post('datatable')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          page: 1,
          limit: 10,
          status: 0,
          userId: '0',
          title: 'test',
          platforms: [1, 5],
          startDate: '09/04/2025',
          endDate: '09/05/2025',
        },
      },
    },
  })
  async datatable(@Body() body: MonitoringDatatableRequestDto): Promise<any> {
    const data = [
      {
        id: '545f456f-f0e0-40db-b8c8-991dcc22898e',
        title: body.title,
        keyword: 'test',
        categoryType: 1,
        platforms: [1, 5],
        status: 0,
        startDate: '2025-09-04',
        endDate: '2025-09-05',
        userId: '0',
        infinity: false,
      },
    ];

    const response = DsStandardResponse(200, 'ok', data, data.length);

    return response;
  }

  @Get('detail/:id')
  @ApiOperation({ summary: 'Get monitoring detail by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    example: '545f456f-f0e0-40db-b8c8-991dcc22898e',
  })
  async detail(@Param('id') id: string): Promise<any> {
    const response = DsStandardResponse(200, 'ok', {
      id: id,
      title: 'test',
      keyword: 'test',
      categoryType: 1,
      platforms: [1, 5],
      status: 0,
      startDate: '2025-09-04',
      endDate: '2025-09-05',
      userId: '0',
      infinity: false,
    });

    return response;
  }
}
