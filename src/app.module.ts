import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true,
    }),
    PostagemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
