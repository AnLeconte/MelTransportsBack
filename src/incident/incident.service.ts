import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ILigne} from "../interface/ligne.interface";
import {IIncident} from "../interface/incident.interface";
import {CreateLigneDto} from "../dto/create-ligne.dto";
import {UpdateIncidentDto} from "../dto/update-incident.dto";

@Injectable()
export class IncidentService {
    constructor(@InjectModel('Incident') private incidentModel:Model<IIncident>) {}
    async createIncidentDto(createIncidentDto: CreateLigneDto): Promise<IIncident> {
        const newIncident = await new this.incidentModel(createIncidentDto);
        return newIncident.save();
    }
    async updateIncidentDto(incidentId: string, updateIncidentDto: UpdateIncidentDto): Promise<IIncident> {
        const existingIncident = await this.incidentModel.findByIdAndUpdate(incidentId, updateIncidentDto, { new: true });
        if (!existingIncident) {
            throw new NotFoundException(`Incident #${incidentId} not found`);
        }
        return existingIncident;
    }
    async getAllIncidents(): Promise<IIncident[]> {
        const incidentData = await this.incidentModel.find();
        if (!incidentData || incidentData.length == 0) {
            throw new NotFoundException('Incident data not found!');
        }
        return incidentData;
    }
    async getIncident(incidentId: string): Promise<IIncident> {
        const existingIncident = await this.incidentModel.findById(incidentId).exec();
        if (!existingIncident) {
            throw new NotFoundException(`Incident #${incidentId} not found`);
        }
        return existingIncident;
    }
    async deleteIncident(incidentId: string): Promise<IIncident> {
        const deletedIncident = await this.incidentModel.findByIdAndDelete(incidentId);
        if (!deletedIncident) {
            throw new NotFoundException(`Incident #${incidentId} not found`);
        }
        return deletedIncident;
    }
}
