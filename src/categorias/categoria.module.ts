import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoModule } from "src/produto/produto.module";
import { ProdutoService } from "src/produto/services/produto.service";
import { CategoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";


@Module({
   
    imports:[TypeOrmModule.forFeature([Categoria]), ProdutoModule],
    providers: [CategoriaService, ProdutoService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]

})
export class CategoriaModule {}