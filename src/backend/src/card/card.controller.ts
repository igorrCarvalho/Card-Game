import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from '../entities/card.entity';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('default')
  async getDefaultCards(): Promise<any[]> {
    return await this.cardService.getDefaultCards();
  }

  @Get()
  async findAll(): Promise<Card[]> {
    return await this.cardService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Card> {
    return await this.cardService.findOne(id);
  }

  @Post()
  async create(@Body() card: Partial<Card>): Promise<Card> {
    return await this.cardService.create(card);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() card: Partial<Card>): Promise<Card> {
    return await this.cardService.update(id, card);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.cardService.remove(id);
  }
}
