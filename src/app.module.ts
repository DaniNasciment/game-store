import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categoria.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password:'root',
      database: 'db_lojagame',
      entities: [Categoria, Produto],
      synchronize: true,
    }),
    CategoriaModule,
    ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
