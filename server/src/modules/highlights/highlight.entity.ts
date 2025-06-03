import { Post } from 'src/modules/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('highlights')
export class Highlight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  highlightName: string;

  @Column({ nullable: false })
  highlightSlug: string;

  @ManyToMany(() => Post, (post) => post.highlights)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
