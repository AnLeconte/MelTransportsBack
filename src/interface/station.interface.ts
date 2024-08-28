import { Document } from 'mongoose';
export interface IStation extends Document{
    readonly nom: string;
    readonly velo: boolean;
}
