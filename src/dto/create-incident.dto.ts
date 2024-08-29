import {IsArray, IsDateString, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Station} from "../schema/station.schema";
import {Ligne} from "../schema/ligne.schema";
export class CreateIncidentDto {

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    readonly intitule: string;

    @IsString()
    @MaxLength(511)
    @IsNotEmpty()
    readonly details: string;

    @IsNotEmpty()
    @IsDateString()
    readonly debut : Date;

    @IsNotEmpty()
    @IsDateString()
    readonly fin : Date;

    @IsNotEmpty()
    @IsArray()
    readonly stations: Station[];

    @IsNotEmpty()
    @IsArray()
    readonly lignes: Ligne[];
}
