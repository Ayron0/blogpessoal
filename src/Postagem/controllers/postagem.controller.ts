import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.services";

@Controller("/postagens")
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) { }
    //a variavel postagemService esta representando a class PostagemService.Ele faz uma requisição para PostagemService

    @Get()
    @HttpCode(HttpStatus.OK)// Esse status vai ser mostrado no Isomnia. Pode ser alterado para mostrar outra coisa
    findAll(): Promise<Postagem[]> { // Se coloca o mesmo nome do metodo que estar em postagem.service 
        return this.postagemService.findAll()
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findByid(@Param("id", ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemService.findByid(id);
    }
}

// Postagem[] lista