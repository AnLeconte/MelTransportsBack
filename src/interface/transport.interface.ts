import { Document } from 'mongoose';
export interface ITransport extends Document{
    readonly type: string;
}
