import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fashion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  image: string;
}
