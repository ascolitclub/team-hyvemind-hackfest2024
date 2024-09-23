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
import { HostelLocation } from './HotelLocation';
import { User } from './User.entity';

@Entity()
export class HostelCredential extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  hostel_name!: string;

  @Column({ type: 'int', unique: true, default: 0 })
  rating!: number;

  @Column({ type: 'number', default: 0 })
  user_ratings_total!: number;

  @Column({ type: 'string' })
  hostel_phoneNumber!: number;

  @Column({ type: 'boolean', default: false })
  opening_hours!: boolean;

  @OneToOne(() => HostelLocation)
  @JoinColumn()
  location!: HostelLocation;

  @OneToOne(() => User, (user) => user.hostel)
  user!: User;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;
}
