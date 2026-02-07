import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('women_products')
export class WomenProduct {
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

  @Column('text')
  modelUrl: string;

  @CreateDateColumn()
  createdAt: Date;
}
