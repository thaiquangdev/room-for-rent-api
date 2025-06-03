import { Post } from 'src/modules/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('post-images')
export class PostImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'image_url', nullable: false })
  imageUrl: string;

  @ManyToOne(() => Post, (post) => post.images)
  post: Post;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
