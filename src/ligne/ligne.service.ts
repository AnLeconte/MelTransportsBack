import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ILigne} from "../interface/ligne.interface";
import {CreateLigneDto} from "../dto/create-ligne.dto";
import {UpdateLigneDto} from "../dto/update-ligne.dto";

@Injectable()
export class LigneService {
    constructor(@InjectModel('Ligne') private ligneModel:Model<ILigne>) {}
    async createLigneDto(createLigneDto: CreateLigneDto): Promise<ILigne> {
        const newLigne = await new this.ligneModel(createLigneDto);
        return newLigne.save();
    }
    async updateLigneDto(ligneId: string, updateLigneDto: UpdateLigneDto): Promise<ILigne> {
        const existingLigne = await this.ligneModel.findByIdAndUpdate(ligneId, updateLigneDto, { new: true });
        if (!existingLigne) {
            throw new NotFoundException(`Station #${ligneId} not found`);
        }
        return existingLigne;
    }
    async getAllLignes(): Promise<ILigne[]> {
        const lignesData = await this.ligneModel.find();
        if (!lignesData || lignesData.length == 0) {
            throw new NotFoundException('Lignes data not found!');
        }
        return lignesData;
    }
    async getLigne(ligneId: string): Promise<ILigne> {
        const existingLigne = await this.ligneModel.findById(ligneId).exec();
        if (!existingLigne) {
            throw new NotFoundException(`Station #${ligneId} not found`);
        }
        return existingLigne;
    }
    async deleteLigne(ligneId: string): Promise<ILigne> {
        const deletedLigne = await this.ligneModel.findByIdAndDelete(ligneId);
        if (!deletedLigne) {
            throw new NotFoundException(`Station #${ligneId} not found`);
        }
        return deletedLigne;
    }
}
