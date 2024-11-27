import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rarity: string;

  @Column()
  damageType: string;

  @Column()
  armorType: string;

  @Column()
  superCard: boolean;

  @Column()
  damage: number;

  @Column()
  hp: number;

  @Column()
  armor: number;

  @Column()
  image: string;
}