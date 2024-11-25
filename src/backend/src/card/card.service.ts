import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find();
  }

  async findOne(id: number): Promise<Card> {
    return await this.cardRepository.findOne({ where: { id } });
  }

  async create(card: Partial<Card>): Promise<Card> {
    const newCard = this.cardRepository.create(card);
    return await this.cardRepository.save(newCard);
  }

  async update(id: number, card: Partial<Card>): Promise<Card> {
    await this.cardRepository.update(id, card);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cardRepository.delete(id);
  }
}
