import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length:255, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length:500, nullable: false})
    descricao:string
    
    @IsNotEmpty()
    @Column({length:100, nullable: false})
    tipo:string

    @ManyToOne(() => Produto, (produto) => produto.categoria, {
        onDelete: "CASCADE"
    })
    produto: Produto

}
