import { TypeOrmModule } from "@nestjs/typeorm";
import { Card } from "./entities/card.entity";
import { CardModule } from './card/card.module';

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
      entities: [Card],
      username: "testuser",
      password: "testuser123",
      synchronize: true,
    }),
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
