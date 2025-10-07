/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_postagens' })
export class Postagem {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number; //id PRIMARY KEY AUTO_INCREMENT

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string; //titulo VARCHAR (100) NOT NULL

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string; //titulo VARCHAR (1000) NOT NULL

  @ApiProperty()
  @UpdateDateColumn()
  data: Date; // data DATE(6) UPDATE_TIMESTAMP

  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}

// Entidade:
// No código = pode ser uma classe
// No banco de dados = é uma tabela
