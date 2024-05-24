import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', //tipo de base de datos
      username: 'postgres', //usuario por defecto
      password: '12345678', //password por defecto
      database: 'tienda', //nombre de la BD
      host: 'localhost', //entorno local
      port: 5432, //puerto por el que corre la BD
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //para las entidades
    }),
    ProductosModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
