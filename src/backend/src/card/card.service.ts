import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../entities/card.entity';
import * as fs from 'fs';
import * as path from 'path';

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

  async getDefaultCards(): Promise<any[]> {
    // Define the path to the JSON files
    const cardsDir = path.join(__dirname, "../../src/src/defaultCards");
    const fileNames = fs.readdirSync(cardsDir);

    // Load and parse the JSON files
    const cards = fileNames.map((fileName) => {
      const filePath = path.join(cardsDir, fileName);
      const fileData = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileData);
    });

    // Separate cards with `superCard: true`
    const superCards = cards.filter((card) => card.superCard === true);
    const normalCards = cards.filter((card) => card.superCard !== true);

    // Ensure only one superCard is included
    const selectedSuperCard =
      superCards.length > 0
        ? superCards[Math.floor(Math.random() * superCards.length)]
        : null;

    // Shuffle the normal cards
    const shuffledNormalCards = normalCards.sort(() => Math.random() - 0.5);

    // Select 3 normal cards and include the superCard
    const result = shuffledNormalCards.slice(0, 3);
    if (selectedSuperCard) {
      result.push(selectedSuperCard);
    }

    // Shuffle the final result for randomness
    return result.sort(() => Math.random() - 0.5);
  }
}
