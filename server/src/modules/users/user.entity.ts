import { Post } from 'src/modules/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'full_name', nullable: false })
  fullName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ name: 'phone_number', nullable: false })
  phoneNumber: string;

  @Column({ nullable: false })
  password: string;

  @Column({ name: 'email_verify', default: false })
  emailVerify: boolean;

  @Column({ nullable: true })
  avatar: string;

  @Column({ enum: ['admin', 'search', 'broker'], type: 'enum' })
  role: string;

  @Column({ name: 'refresh_token', type: 'text', nullable: true })
  refreshToken: string | null;

  @Column({ nullable: true })
  otp: string;

  @Column({ name: 'otp_expired', nullable: true })
  otpExpired: Date;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ nullable: true })
  passwordResetExpire: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
