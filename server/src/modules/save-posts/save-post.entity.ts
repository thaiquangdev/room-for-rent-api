import { Post } from 'src/modules/posts/post.entity';
import { User } from 'src/modules/users/user.entity';
import {
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class SavePost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.savePosts, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Post, (post) => post.savePosts, { onDelete: 'CASCADE' })
  post: Post;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
