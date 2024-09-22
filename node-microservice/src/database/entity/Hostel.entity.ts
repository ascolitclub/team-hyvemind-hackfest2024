import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { HostelLocation } from './HotelLocation';

@Entity()
export class HostelCredential {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  hostel_name!: string;

  @Column({ type: 'int', unique: true })
  rating!: number;

  @Column({ type: 'varchar', length: 255 })
  user_ratings_total!: string;

  @Column({ type: 'boolean' })
  opening_hours!: boolean;

  @OneToOne(() => HostelLocation)
  @JoinColumn() // This decorator will create a foreign key in the HostelCredential table
  location!: HostelLocation;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;
}
