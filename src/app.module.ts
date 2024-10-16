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
import {LigneSchema} from "./schema/ligne.schema";
import { LigneService } from './ligne/ligne.service';
import { LigneController } from './ligne/ligne.controller';
import {IncidentSchema} from "./schema/incident.schema";
import { IncidentService } from './incident/incident.service';
import { IncidentController } from './incident/incident.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI,{ dbName: 'transport' }),
    MongooseModule.forFeature([{ name: 'Station', schema: StationSchema }]),
    MongooseModule.forFeature([{ name: 'Transport', schema: TransportSchema }]),
    MongooseModule.forFeature([{ name: 'Ligne', schema: LigneSchema }]),
    MongooseModule.forFeature([{ name: 'Incident', schema: IncidentSchema }]),
  ],
  controllers: [AppController, StationController, TransportController, LigneController, IncidentController],
  providers: [AppService, StationService, TransportService, LigneService, IncidentService],
})
export class AppModule {}
