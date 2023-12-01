import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Member } from './member.entity'

@Entity()
export class MembershipType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @Column()
  forteId: string

  @Column({ nullable: false })
  price: number

  @Column()
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column({ default: -1 })
  numClassesPerWeek: number

  @Column({ default: -1 })
  numStyles: number

  @Column({ default: -1 })
  maxAge: number

  @OneToMany(() => Member, (member) => member.membershipType)
  members: Member[]
}
