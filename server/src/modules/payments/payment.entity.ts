import { Post } from 'src/modules/posts/post.entity';
import { ServicePrice } from 'src/modules/service-prices/service-price.entity';
import { User } from 'src/modules/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'payment_status',
    enum: ['Đang chờ', 'Thành công', 'Thất bại'],
  })
  paymentStatus: string;

  @Column({
    name: 'payment_date',
    nullable: false,
  })
  paymentDate: Date;

  @Column({ type: 'decimal', nullable: false })
  amount: number;

  @Column({ type: 'decimal', nullable: true })
  promotion: number;

  @Column({ name: 'transaction_id', nullable: true })
  transactionId: string;

  @Column({
    name: 'payment_method',
    nullable: true,
    enum: ['vnpay', 'momo', 'zalopay'],
  })
  paymentMethod: string;

  @Column({
    name: 'payment_type',
    enum: ['Nạp tiền', 'Thanh toán'],
  })
  paymentType: string;

  @Column({ name: 'before_amount', type: 'decimal', nullable: true })
  beforeAmount: number;

  @Column({ name: 'after_amount', type: 'decimal', nullable: true })
  afterAmount: number;

  @Column({ nullable: true })
  note: string;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;

  @ManyToOne(() => ServicePrice, (servicePrice) => servicePrice.payments)
  servicePrice: ServicePrice;

  @ManyToOne(() => Post, (post) => post.payments)
  post: Post;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
