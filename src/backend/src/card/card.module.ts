import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { Card } from '../entities/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}
