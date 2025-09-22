import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.services";
import { Postagem } from "./entities/postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [],
})
export class PostagemModule {}