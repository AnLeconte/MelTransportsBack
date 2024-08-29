import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StationSchema } from './schema/station.schema';
import { StationService } from './station/station.service';
import { StationController } from './station/station.controller';
import {TransportSchema} from "./schema/transport.schema";
import { TransportService } from './transport/transport.service';
import { TransportController } from './transport/transport.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'transport'}),
    MongooseModule.forFeature([{ name: 'Station', schema: StationSchema }]),
    MongooseModule.forFeature([{ name: 'Transport', schema: TransportSchema }])
  ],
  controllers: [AppController, StationController, TransportController],
  providers: [AppService, StationService, TransportService],
})
export class AppModule {}
