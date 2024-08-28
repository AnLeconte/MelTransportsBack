import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateStationDto {

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    readonly nom: string;

    @IsNotEmpty()
    readonly velo: boolean;

}
