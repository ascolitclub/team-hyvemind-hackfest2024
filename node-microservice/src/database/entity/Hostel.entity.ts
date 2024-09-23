import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { User } from './User.entity';

@Entity()
export class HostelCredential extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  hostel_name!: string;

  @Column({ type: 'int', default: 0 }) // Removed unique: true
  rating!: number;

  @Column({ type: 'int', default: 0 })
  user_ratings_total!: number;

  @Column({ type: 'text' })
  hostel_phoneNumber!: string; // Changed to string

  @Column({ type: 'boolean', default: false })
  opening_hours!: boolean;

  @Column()
  lat!: number;

  @Column()
  lng!: number;

  @Column()
  address!: string;

  @Column()
  photos!: string;

  @Column()
  place_id!: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;
}
