import {
  BaseEntity,
  Check,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { MembershipType } from './membership-type.entity'
import { MembershipStatus } from './membership-status.enum'
import { Class } from '../class/class.entity'
import { CheckIn } from '../check-in/check-in.entity'

@Entity()
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  dob: Date

  @Column({ nullable: true })
  address: string

  @Column({ nullable: true })
  email: string

  @Column()
  phone: string

  @Column({ nullable: true })
  forteId: string

  @ManyToOne(() => MembershipType, (membershipType) => membershipType.members, {
    nullable: true
  })
  membershipType: MembershipType

  @Column({ nullable: true })
  membershipStatus: MembershipStatus

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column({ default: false })
  isStaff: boolean

  @OneToMany(() => Class, (classEntity) => classEntity.instructor, {
    nullable: true
  })
  classesTeaching: Class[]

  @OneToMany(() => CheckIn, (checkIn) => checkIn.member, { nullable: true })
  checkIns: CheckIn[]
}
