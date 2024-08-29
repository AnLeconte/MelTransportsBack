import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Transport {
    @Prop()
    type: string;
}
export const TransportSchema = SchemaFactory.createForClass(Transport);
