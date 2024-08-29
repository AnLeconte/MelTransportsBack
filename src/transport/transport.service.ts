import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateStationDto} from "../dto/create-station.dto";
import {UpdateStationDto} from "../dto/update.station.dto";
import {ITransport} from "../interface/transport.interface";
import {CreateTransportDto} from "../dto/create-transport.dto";
import {UpdateTransportDto} from "../dto/update.transport";

@Injectable()
export class TransportService {
    constructor(@InjectModel('Transport') private transportModel:Model<ITransport>) {}
    async createTransportDto(createTransportDto: CreateTransportDto): Promise<ITransport> {
        const newTransport = await new this.transportModel(createTransportDto);
        return newTransport.save();
    }
    async updateTransport(transportId: string, updateTransportDto: UpdateTransportDto): Promise<ITransport> {
        const existingTransport = await this.transportModel.findByIdAndUpdate(transportId, updateTransportDto, { new: true });
        if (!existingTransport) {
            throw new NotFoundException(`Station #${transportId} not found`);
        }
        return existingTransport;
    }
    async getAllTransports(): Promise<ITransport[]> {
        const transportsData = await this.transportModel.find();
        if (!transportsData || transportsData.length == 0) {
            throw new NotFoundException('Stations data not found!');
        }
        return transportsData;
    }
    async getTransport(transportId: string): Promise<ITransport> {
        const existingTransport = await this.transportModel.findById(transportId).exec();
        if (!existingTransport) {
            throw new NotFoundException(`Station #${transportId} not found`);
        }
        return existingTransport;
    }
    async deleteTransport(transportId: string): Promise<ITransport> {
        const deletedTransport = await this.transportModel.findByIdAndDelete(transportId);
        if (!deletedTransport) {
            throw new NotFoundException(`Station #${transportId} not found`);
        }
        return deletedTransport;
    }
}


