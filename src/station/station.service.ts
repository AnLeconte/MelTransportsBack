import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from "mongoose";
import {IStation} from "../interface/station.interface";
import {CreateStationDto} from "../dto/create-station.dto";
import {UpdateStationDto} from "../dto/update.station.dto";

@Injectable()
export class StationService {
    constructor(@InjectModel('Station') private stationModel:Model<IStation>) {}
    async createStationDto(createStationDto: CreateStationDto): Promise<IStation> {
        const newStation = await new this.stationModel(createStationDto);
        return newStation.save();
    }
    async updateStation(stationId: string, updateStationDto: UpdateStationDto): Promise<IStation> {
        const existingStation = await this.stationModel.findByIdAndUpdate(stationId, updateStationDto, { new: true });
        if (!existingStation) {
            throw new NotFoundException(`Station #${stationId} not found`);
        }
        return existingStation;
    }
    async getAllStations(): Promise<IStation[]> {
        const stationsData = await this.stationModel.find();
        if (!stationsData || stationsData.length == 0) {
            throw new NotFoundException('Stations data not found!');
        }
        return stationsData;
    }
    async getStation(stationId: string): Promise<IStation> {
        const existingStation = await this.stationModel.findById(stationId).exec();
        if (!existingStation) {
            throw new NotFoundException(`Station #${stationId} not found`);
        }
        return existingStation;
    }
    async deleteStation(stationId: string): Promise<IStation> {
        const deletedStation = await this.stationModel.findByIdAndDelete(stationId);
        if (!deletedStation) {
            throw new NotFoundException(`Station #${stationId} not found`);
        }
        return deletedStation;
    }
}
