import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

type cardDataTyoe = {
    name: string;
    description: string;
    rarity: string;
    damageType: string;
    armorType: string;
    superCard: boolean;
    damage: number;
    hp: number;
    armor: number;
    image: string;
};

type cardsFightingType = {
    player: cardDataTyoe;
    ia: cardDataTyoe;
};

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isActive: boolean;

  @Column()
  cardsFighting: string;

  @Column()
  playerAliveCards: string;

  @Column()
  IAAliveCards: string;

  @Column()
  playerDeadCards: string;

  @Column()
  IADeadCards: string;
}