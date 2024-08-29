import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StationSchema } from './schema/station.schema';
import { StationService } from './station/station.service';
import { StationController } from './station/station.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'transport'}),
    MongooseModule.forFeature([{ name: 'Station', schema: StationSchema }])
  ],
  controllers: [AppController, StationController],
  providers: [AppService, StationService],
})
export class AppModule {}
