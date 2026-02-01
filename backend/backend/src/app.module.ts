import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { FashionModule } from './fashion/fashion.module';
import { Fashion } from './fashion/entity/fashion.entity';
import { AccessoriesModule } from './accessories/accessories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'ecommerce_db',
      entities: [User, Fashion],
      synchronize: true,
    }),
    AuthModule,
    FashionModule,
    AccessoriesModule,
  ],
})
export class AppModule {}
