import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from '../entities/game.entity';


@Controller('games')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get('all')
    async getDefaultCards(): Promise<Game[]> {
      return await this.gameService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Game> {
      return await this.gameService.findOne(id);
    }
  
    @Post()
    async create(@Body() game: Partial<Game>): Promise<Game> {
      const r =  await this.gameService.create(game);
      return r;
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() game: Partial<Game>): Promise<Game> {
      return await this.gameService.update(id, game);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
      await this.gameService.remove(id);
    }
}
