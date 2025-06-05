import { Payment } from 'src/modules/payments/payment.entity';
import { Post } from 'src/modules/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('service-prices')
export class ServicePrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'price_day', nullable: false, type: 'decimal' })
  priceDay: number;

  @Column({ name: 'price_week', nullable: false, type: 'decimal' })
  priceWeek: number;

  @Column({ name: 'price_month', nullable: false, type: 'decimal' })
  priceMonth: number;

  @Column({ name: 'price_push_post', nullable: false, type: 'decimal' })
  pricePushPost: number;

  @Column({ name: 'title_color', nullable: false })
  titleColor: string;

  @Column({ name: 'post_size', nullable: false })
  postSize: string;

  @Column({ name: 'auto_browse', nullable: false })
  autoBrowse: boolean;

  @Column({ name: 'show_button_call', nullable: false })
  showButtonCall: boolean;

  @Column({ nullable: false, type: 'integer' })
  priority: number;

  @OneToMany(() => Payment, (payment) => payment.servicePrice)
  payments: Payment[];

  @OneToMany(() => Post, (post) => post.servicePrice)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
