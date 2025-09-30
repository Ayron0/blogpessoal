import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({name: "tb_postagens"})
export class Postagem {
    @PrimaryGeneratedColumn()
    id: number //id PRIMARY KEY AUTO_INCREMENT

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string //titulo VARCHAR (100) NOT NULL

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string //titulo VARCHAR (1000) NOT NULL

    @UpdateDateColumn()
    data: Date // data DATE(6) UPDATE_TIMESTAMP

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}

// Entidade:
// No código = pode ser uma classe 
// No banco de dados = é uma tabela