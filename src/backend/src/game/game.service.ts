import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
      ) {}
    
      async findAll(): Promise<Game[]> {
        return await this.gameRepository.find();
      }
    
      async findOne(id: number): Promise<Game> {
        return await this.gameRepository.findOne({ where: { id } });
      }
    
      async create(card: Partial<Game>): Promise<Game> {
        const newCard = this.gameRepository.create(card);
        return await this.gameRepository.save(newCard);
      }
    
      async update(id: number, card: Partial<Game>): Promise<Game> {
        await this.gameRepository.update(id, card);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.gameRepository.delete(id);
      }
}
