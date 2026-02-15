import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type ConditionType = 'Excellent' | 'Good' | 'Fair';

@Entity()
export class Antique {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  era: string;

  @Column()
  origin: string;

  @Column('decimal')
  price: number;

  @Column()
  img: string;

  @Column()
  category: string;

  @Column()
  condition: ConditionType;
}
