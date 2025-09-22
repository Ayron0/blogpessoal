import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

}