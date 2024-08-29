import { Document } from 'mongoose';
import {Station} from "../schema/station.schema";
import {Transport} from "../schema/transport.schema";
export interface ILigne extends Document{
    readonly nom: string;
    readonly type: Transport;
    readonly premier_depart : Date;
    readonly dernier_depart : Date;
    readonly frequence : number;
    readonly stations: Station[];
}
