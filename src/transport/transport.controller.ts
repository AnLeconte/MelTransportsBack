import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {TransportService} from "./transport.service";
import {CreateTransportDto} from "../dto/create-transport.dto";
import {UpdateTransportDto} from "../dto/update.transport";

@Controller('transport')
export class TransportController {
    constructor(private readonly transportService: TransportService) {}
    @Post()
    async createTransport(@Res() response, @Body() createTransportDto: CreateTransportDto) {
        try {
            const newTransport = await this.transportService.createTransportDto(createTransportDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Le transport a été créé avec succès',
                newTransport,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: "Erreur : Le transport n'a pas été créée!",
                error: 'Bad Request'
            });
        }
    }
    @Put('/:id')
    async updateTransport(@Res() response,@Param('id') transportId: string,
                        @Body() updateTransportDto: UpdateTransportDto) {
        try {
            const existingTransport = await this.transportService.updateTransport(transportId, updateTransportDto);
            return response.status(HttpStatus.OK).json({
                message: 'Le transport a été créée',
                existingTransport,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get()
    async getTransports(@Res() response) {
        try {
            const transportData = await this.transportService.getAllTransports();
            return response.status(HttpStatus.OK).json({
                message: 'Tous les transports', transportData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getTransport(@Res() response, @Param('id') transportId: string) {
        try {
            const existingTransports = await
                this.transportService.getTransport(transportId);
            return response.status(HttpStatus.OK).json({
                message: 'Transport trouvé',existingTransports,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteTransport(@Res() response, @Param('id') transportId: string)
    {
        try {
            const deletedTransport = await this.transportService.deleteTransport(transportId);
            return response.status(HttpStatus.OK).json({
                message: 'Transport supprimé avec succès',
                deletedTransport,});
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
