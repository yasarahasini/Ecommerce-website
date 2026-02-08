import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('men_products')
export class MenProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column('text', { array: true, default: [] })
  size: string[];

  @Column('decimal')
  price: number;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;
}
