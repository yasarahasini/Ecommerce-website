import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Baby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column('simple-array')
  size: string[];

  @Column('decimal')
  price: number;

  @Column()
  modelUrl: string;
}
