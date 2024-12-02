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

  @Column({ type: 'text' })
  cardsFighting: string;

  @Column({ type: 'text' })
  playerAliveCards: string;

  @Column({ type: 'text' })
  IAAliveCards: string;

  @Column({ type: 'text' })
  playerDeadCards: string;

  @Column({ type: 'text' })
  IADeadCards: string;
}