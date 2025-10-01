import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../Postagem/entities/postagem.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    @IsEmail() // Verifica o padrão de email
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    usuario: string

    @MinLength(8) // força a senha ter no Minimo 8 caracteres
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    senha: string

    @Column({length: 5000 }) //nullable que dizer não é obrigatorio ter foto
    foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}