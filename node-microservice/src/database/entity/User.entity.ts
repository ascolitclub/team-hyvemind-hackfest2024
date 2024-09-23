import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { HostelCredential } from './Hostel.entity';

export enum RolesConstant {
  USER = 'user',
  HOSTEL_OWNER = 'hostel_owner',
  ADMIN = 'admin',
}

export enum StatusConstant {
  PENDING = 'pending',
  NOT_APPLY = 'not_apply',
  APPROVED = 'approved',
}

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username!: string;

  @Column({ type: 'text' })
  password!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email!: string;

  @Column({ type: 'text', nullable: false })
  phoneNumber!: string;

  @Column({ default: 'user', enum: RolesConstant })
  role!: string;

  @Column({ default: 'not_apply', enum: StatusConstant })
  status!: string;

  @OneToOne(() => HostelCredential, (hostelCredential) => hostelCredential.user)
  hostel!: HostelCredential;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
