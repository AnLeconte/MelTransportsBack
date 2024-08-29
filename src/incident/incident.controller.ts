import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {CreateLigneDto} from "../dto/create-ligne.dto";
import {UpdateLigneDto} from "../dto/update-ligne.dto";
import {IncidentService} from "./incident.service";
import {UpdateIncidentDto} from "../dto/update-incident.dto";

@Controller('incident')
export class IncidentController {
    constructor(private readonly incidentService: IncidentService) {}
    @Post()
    async createIncident(@Res() response, @Body() createIncidentDto: CreateLigneDto) {
        try {
            const newIncident = await this.incidentService.createIncidentDto(createIncidentDto);
            return response.status(HttpStatus.CREATED).json({
                message: "L'incident a été créé avec succès",
                newIncident,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: "Erreur : L'incident n'a pas été créé!",
                error: 'Bad Request'
            });
        }
    }
    @Put('/:id')
    async updateIncident(@Res() response,@Param('id') incidentId: string,
                      @Body() updateIncidentDto: UpdateIncidentDto) {
        try {
            const existingIncident = await this.incidentService.updateIncidentDto(incidentId, updateIncidentDto);
            return response.status(HttpStatus.OK).json({
                message: 'La ligne a été créée',
                existingIncident,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get()
    async getIncidents(@Res() response) {
        try {
            const incidentData = await this.incidentService.getAllIncidents();
            return response.status(HttpStatus.OK).json({
                message: 'Tous les incidents',incidentData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getIncident(@Res() response, @Param('id') incidentId: string) {
        try {
            const existingIncident = await
                this.incidentService.getIncident(incidentId);
            return response.status(HttpStatus.OK).json({
                message: 'Incident trouvé',existingIncident,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteIncident(@Res() response, @Param('id') incidentId: string)
    {
        try {
            const deletedIncident = await this.incidentService.deleteIncident(incidentId);
            return response.status(HttpStatus.OK).json({
                message: 'Incident supprimé avec succès',
                deletedIncident,});
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
