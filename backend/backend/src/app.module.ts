import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { FashionModule } from './fashion/fashion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'ecommerce_db',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    FashionModule,
  ],
})
export class AppModule {}
