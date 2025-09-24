import { Module } from '@nestjs/common';
import MonitoringController from './account.controller';

@Module({
  controllers: [MonitoringController],
})
export class MonitoringModule {}
