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

@ApiTags('Monitoring Media Social')
@UseInterceptors(DsWrapResponseInterceptor)
@Controller('api/monitoring-media-social')
export default class MonitoringMediaSocialController {
  @Post('datatable/twitter')
  @ApiBody({
    type: MonitoringDatatableRequestDto,
    description: 'Monitoring Datatable Request Body',
    examples: {
      monitoringDatatableExample: {
        summary: 'Monitoring Datatable Request Body Example',
        value: {
          monitoringId: '44cd0c8a-dfd6-4845-9723-8f5b92da9260',
          accountName: '',
          startDate: '',
          endDate: '',
          description: '',
          page: 1,
          limit: 10,
        },
      },
    },
  })
  async datatableTwitter(
    @Body() body: MonitoringDatatableRequestDto,
  ): Promise<any> {
    const data = [
      {
        id: 1965001437437645239,
        id_str: '1965001437437645239',
        conversation_id: '1965001437437645239',
        date: '2025-09-08',
        time: '17:37',
        timezone: '',
        user_id: 1162671550694416384,
        user_id_str: '1162671550694416384',
        screen_name: 'HaboDafyn',
        time_update: 0,
        tweet:
          'This can be your sub yet  you are also in the comment section laughing and asking who 😭😭😭😭',
        place: '',
        replies_count: 4,
        likes_count: 7,
        retweets_count: 0,
        name: 'Habo Dafyn Brooke',
        link: 'https://twitter.com/HaboDafyn/status/1965001437437645239',
        mentions: '',
        hashtags: '',
        cashtags: '',
        urls: '',
        photos: 'img',
        quote_url: '',
        video: 0,
        geo: '',
        near: '',
        source: '',
        translate: '',
        trans_src: '',
        trans_dest: '',
        possibly_sensitive: 0,
        context: '',
        view_count: 933,
        type: 0,
        ref_tweet_type: 'quoted',
        ref_tweet_id: '1964932552193720629',
        ref_tweet_username: '',
        status: 0,
        follower_count: 4157,
        user_created: '2019-08-17 10:24:59',
        days_account: 2222,
        age_account: '> 1 Tahun',
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
