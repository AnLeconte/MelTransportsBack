import {IsArray, IsDateString, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {Station} from "../schema/station.schema";
import {Transport} from "../schema/transport.schema";
export class CreateLigneDto {

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    readonly nom: string;

    @IsNotEmpty()
    readonly type: Transport;

    @IsNotEmpty()
    @IsDateString()
    readonly premier_depart : Date;

    @IsNotEmpty()
    @IsDateString()
    readonly dernier_depart : Date;

    @IsNotEmpty()
    readonly frequence : number;

    @IsNotEmpty()
    @IsArray()
    readonly stations: Station[];
}
