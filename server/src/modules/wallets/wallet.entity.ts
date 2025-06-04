import { User } from 'src/modules/users/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  balance: string;

  @OneToOne(() => User, (user) => user.wallet)
  user: User;
}
