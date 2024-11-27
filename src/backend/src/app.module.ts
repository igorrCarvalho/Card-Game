import { TypeOrmModule } from "@nestjs/typeorm";
import { Card } from "./entities/card.entity";
import { CardModule } from './card/card.module';
import { GameModule } from './game/game.module';
import { Game } from "./entities/game.entity";

const { Module } = require("@nestjs/common")
const { AppController } = require("./app.controller");
const { AppService } = require("./app.service")


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "mysql_db",
      port: 3306,
      database: "nestjs_docker_tutorial",
      entities: [Card, Game],
      username: "testuser",
      password: "testuser123",
      synchronize: true,
    }),
    CardModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
