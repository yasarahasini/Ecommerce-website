import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Art {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column('decimal')
  price: number;

  @Column()
  img: string;

  @Column()
  category: string;
}
