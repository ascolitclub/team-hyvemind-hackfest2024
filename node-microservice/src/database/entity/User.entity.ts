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

@Entity()
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

  @Column({
    type: 'enum',
    enum: RolesConstant,
    default: RolesConstant.USER,
  })
  role: string;

  @Column({
    type: 'enum',
    enum: StatusConstant,
    default: StatusConstant.PENDING, // Corrected default value
  })
  status: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
