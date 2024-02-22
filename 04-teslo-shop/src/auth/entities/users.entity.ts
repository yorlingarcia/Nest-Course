import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  fullName: string;

  @Column('text')
  isActive: boolean;

  @Column('text', {
    array: true,
  })
  roles: string[];
}
