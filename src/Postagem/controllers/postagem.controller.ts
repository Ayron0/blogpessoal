import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.services";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
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

    @Get("/titulo/:titulo")
    @HttpCode(HttpStatus.OK)
    findByAllTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findAllByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.postagemService.delete(id);
    }
}

// Postagem[] lista