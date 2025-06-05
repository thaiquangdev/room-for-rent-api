import { PriceUnit } from 'src/common/enums/price-unit.enum';
import { Highlight } from 'src/modules/highlights/highlight.entity';
import { Payment } from 'src/modules/payments/payment.entity';
import { PostImage } from 'src/modules/posts/post-image.entity';
import { ServicePrice } from 'src/modules/service-prices/service-price.entity';
import { User } from 'src/modules/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'post_name', nullable: false })
  postName: string;

  @Column({ name: 'post_slug', nullable: false })
  postSlug: string;

  @Column({ nullable: false })
  category: string;

  @Column({ nullable: false })
  conscious: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  ward: string;

  @Column({ nullable: false })
  road: string;

  @Column({ nullable: false })
  hourseNumber: string;

  @Column({ nullable: false, type: 'text' })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ name: 'price_unit', nullable: false })
  priceUnit: PriceUnit;

  @Column({ nullable: false })
  area: number;

  @Column({ nullable: true })
  videoUrl: string;

  @Column({ nullable: true })
  videoType: string;

  @Column({ nullable: true })
  expiredAt: Date;

  @Column({ default: false })
  isApprove: boolean;

  @ManyToMany(() => Highlight, (highlight) => highlight.posts)
  @JoinTable({
    name: 'post_highlights',
    joinColumn: { name: 'post_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'highlight_id', referencedColumnName: 'id' },
  })
  highlights: Highlight[];

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @OneToMany(() => PostImage, (postImage) => postImage.post)
  images: PostImage[];

  @OneToMany(() => Payment, (payment) => payment.post)
  payments: Payment[];

  @ManyToOne(() => ServicePrice, (servicePrice) => servicePrice.postSize)
  servicePrice: ServicePrice;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
