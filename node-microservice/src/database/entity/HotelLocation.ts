import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity()
  export class HostelLocation {
    @PrimaryGeneratedColumn({ type: 'int' })
    location_id!: number;
  
    @Column({ type: 'decimal', precision: 9, scale: 6 }) 
    lat!: number;
  
    @Column({ type: 'decimal', precision: 9, scale: 6 })
    lng!: number;
  
    @Column({ type: 'boolean' })
    opening_hour!: boolean;
  
    @Column({ type: 'varchar', length: 255 })
    location!: string;
  }
  