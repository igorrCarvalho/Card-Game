"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const { Module } = require("@nestjs/common");
const { AppController } = require("./app.controller");
const { AppService } = require("./app.service");
const { TypeOrmModule } = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    Module({
        imports: [
            TypeOrmModule.forRoot({
                type: "mysql",
                host: "mysql_db",
                port: 3306,
                database: "nestjs_docker_tutorial",
                entities: [],
                username: "testuser",
                password: "testuser123",
                synchronize: true,
            }),
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map