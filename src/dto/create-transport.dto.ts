import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateTransportDto {

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    readonly type: string;
}
