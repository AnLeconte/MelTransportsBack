import { Document } from 'mongoose';
import {Station} from "../schema/station.schema";
import {Ligne} from "../schema/ligne.schema";
export interface IIncident extends Document{
    readonly intitule: string;
    readonly details: string;
    readonly debut: Date;
    readonly fin: Date;
    readonly stations: Station[];
    readonly lignes: Ligne[];
}
