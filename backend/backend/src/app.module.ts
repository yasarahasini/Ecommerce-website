import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { FashionModule } from './fashion/fashion.module';
import { Fashion } from './fashion/entity/fashion.entity';
import { AccessoriesModule } from './accessories/accessories.module';
import { AccessoriesController } from './accessories/accessories.controller';
import { DealsModule } from './deals/deals.module';
import { ContactModule } from './contact/contact.module';
import { ElectronicModule } from './electronic/electronic.module';
import { WomenModule } from './women/women.module';
import { MenModule } from './men/men.module';
import { AboutModule } from './about/about.module';
import { AntiquesModule } from './antiques/antiques.module';
import { ArtController } from './art/art.controller';
import { ArtModule } from './art/art.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'ecommerce_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    FashionModule,
    AccessoriesModule,
    DealsModule,
    ContactModule,
    ElectronicModule,
    WomenModule,
    MenModule,
    AboutModule,
    AntiquesModule,
    ArtModule,
  ],
  controllers: [ArtController],
})
export class AppModule {}
