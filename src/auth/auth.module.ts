import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';

//Estructura de un modulo
@Module({
  //el arroba es un decorador
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule, AuthModule],
})
export class AuthModule {}
