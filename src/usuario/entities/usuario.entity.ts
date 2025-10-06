import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../Postagem/entities/postagem.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail() // Verifica o padrão de email
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty({ example: 'email@email.com.br' })
  usuario: string;

  @MinLength(8) // força a senha ter no Minimo 8 caracteres
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 5000 }) //nullable que dizer não é obrigatorio ter foto
  @ApiProperty()
  foto: string;

  @ApiProperty()
  @OneToMany(() => Postagem, (postagem) => postagem.usuario)
  postagem: Postagem[];
}
