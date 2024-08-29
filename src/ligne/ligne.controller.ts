import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {CreateStationDto} from "../dto/create-station.dto";
import {UpdateStationDto} from "../dto/update.station.dto";
import {LigneService} from "./ligne.service";
import {CreateLigneDto} from "../dto/create-ligne.dto";
import {UpdateLigneDto} from "../dto/update-ligne.dto";

@Controller('ligne')
export class LigneController {
    constructor(private readonly ligneService: LigneService) {}
    @Post()
    async createLigne(@Res() response, @Body() createLigneDto: CreateLigneDto) {
        try {
            const newLigne = await this.ligneService.createLigneDto(createLigneDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'La ligne a été créée avec succès',
                newLigne,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: "Erreur : La ligne n'a pas été créée!",
                error: 'Bad Request'
            });
        }
    }
    @Put('/:id')
    async updateLigne(@Res() response,@Param('id') ligneId: string,
                        @Body() updateLigneDto: UpdateLigneDto) {
        try {
            const existingLigne = await this.ligneService.updateLigneDto(ligneId, updateLigneDto);
            return response.status(HttpStatus.OK).json({
                message: 'La ligne a été créée',
                existingLigne,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get()
    async getLignes(@Res() response) {
        try {
            const ligneData = await this.ligneService.getAllLignes();
            return response.status(HttpStatus.OK).json({
                message: 'Toutes les lignes',ligneData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getLigne(@Res() response, @Param('id') ligneId: string) {
        try {
            const existingLigne = await
                this.ligneService.getLigne(ligneId);
            return response.status(HttpStatus.OK).json({
                message: 'Ligne trouvée',existingLigne,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteLigne(@Res() response, @Param('id') ligneId: string)
    {
        try {
            const deletedLigne = await this.ligneService.deleteLigne(ligneId);
            return response.status(HttpStatus.OK).json({
                message: 'Ligne supprimée avec succès',
                deletedLigne,});
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
