import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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