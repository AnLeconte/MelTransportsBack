import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {StationService} from "./station.service";
import {CreateStationDto} from "../dto/create-station.dto";
import {UpdateStationDto} from "../dto/update.station.dto";

@Controller('station')
export class StationController {
    constructor(private readonly stationService: StationService) {}
    @Post()
    async createStation(@Res() response, @Body() createStationDto: CreateStationDto) {
        try {
            const newStation = await this.stationService.createStationDto(createStationDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'La station a été créée avec succès',
                newStation,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: "Erreur : La station n'a pas été créée!",
                error: 'Bad Request'
            });
        }
    }
    @Put('/:id')
    async updateStation(@Res() response,@Param('id') stationId: string,
                        @Body() updateStationDto: UpdateStationDto) {
        try {
            const existingStation = await this.stationService.updateStation(stationId, updateStationDto);
            return response.status(HttpStatus.OK).json({
                message: 'La station a été créée',
                existingStation,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get()
    async getStations(@Res() response) {
        try {
            const stationData = await this.stationService.getAllStations();
            return response.status(HttpStatus.OK).json({
                message: 'Toutes les stations',stationData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getStation(@Res() response, @Param('id') stationId: string) {
        try {
            const existingStation = await
                this.stationService.getStation(stationId);
            return response.status(HttpStatus.OK).json({
                message: 'Station trouvée',existingStation,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteStation(@Res() response, @Param('id') stationId: string)
    {
        try {
            const deletedStation = await this.stationService.deleteStation(stationId);
            return response.status(HttpStatus.OK).json({
                message: 'Station supprimée avec succès',
                deletedStation,});
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
