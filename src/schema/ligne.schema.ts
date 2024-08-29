import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import * as mongoose from "mongoose";
import {Station} from "./station.schema";
import {Transport} from "./transport.schema";
@Schema()
export class Ligne {
    @Prop()
    nom: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transport' }] })
    type: Transport;
    @Prop()
    premier_depart: Date;
    @Prop()
    dernier_depart: Date;
    @Prop()
    frequence: number;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Station' }] })
    stations: Station[];
}
export const LigneSchema = SchemaFactory.createForClass(Ligne);
