import { Module } from '@nestjs/common';
import MonitoringMediaSocialController from './monitoring-media-social.controller';

@Module({
  controllers: [MonitoringMediaSocialController],
})
export class MonitoringMediaSocialModule {}
