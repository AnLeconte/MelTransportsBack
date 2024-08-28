import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Station {
    @Prop()
    nom: string;
    @Prop()
    velo: boolean;
}
export const StationSchema = SchemaFactory.createForClass(Station);
