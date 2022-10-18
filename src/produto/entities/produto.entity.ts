import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categorias/entities/categoria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length:255, nullable: false})
    nomeProduto: string

    @IsNotEmpty()
    @Column('decimal', {precision:7, scale:2, nullable: false})
    preco: number

    @UpdateDateColumn()
    datacompra: Date

    @OneToMany(() => Categoria, (categoria) => categoria.produto)
    categoria: Categoria[]
}

