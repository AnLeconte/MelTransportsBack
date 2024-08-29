import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import * as mongoose from "mongoose";
import {Station} from "./station.schema";
import {Ligne} from "./ligne.schema";
@Schema()
export class Incident {
    @Prop()
    intitule: string;
    @Prop()
    details: string;
    @Prop()
    debut: Date;
    @Prop()
    fin: Date;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Station' }] })
    stations: Station[];
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ligne' }] })
    lignes: Ligne[];
}
export const IncidentSchema = SchemaFactory.createForClass(Incident);
