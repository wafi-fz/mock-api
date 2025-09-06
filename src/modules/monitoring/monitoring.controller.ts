import { DsStandardResponse } from '@/helpers/ds-standard-response';
import DsWrapResponseInterceptor from '@/interceptors/ds-wrap-response.interceptor';
import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MonitoringRequestDto } from './dtos/monitoring-request.dto';

@ApiTags('Monitoring')
@UseInterceptors(DsWrapResponseInterceptor)
@Controller('monitoring')
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
      startDate: body.startDate,
      endDate: body.endDate,
      userId: body.userId,
      durationType: body.infinity ? 0 : 1,
    });

    return response;
  }
}
