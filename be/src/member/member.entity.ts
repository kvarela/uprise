import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { MembershipType } from './membership-type.entity'
import { MembershipStatus } from './membership-status.enum'

@Entity()
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  dob: Date

  @Column()
  address: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  forteId: string

  @ManyToOne(() => MembershipType, (membershipType) => membershipType.members)
  membershipType: MembershipType

  @Column()
  membershipStatus: MembershipStatus

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
