import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('deals')
export class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  originalPrice: number;

  @Column('decimal', { precision: 10, scale: 2 })
  discountPrice: number;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;
}
