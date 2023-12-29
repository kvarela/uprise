import {
  BaseEntity,
  Check,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { MembershipType } from './membership-type.entity'
import { MembershipStatus } from './enums/membership-status.enum'
import { Class } from '../class/class.entity'
import { CheckIn } from '../check-in/check-in.entity'
import { Gender } from '../gender.enum'

@Entity()
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  dob: Date

  @Column({ default: Gender.MALE })
  gender: Gender

  @Column({ nullable: true })
  address: string

  @Column({ nullable: true })
  email: string

  @Column({ unique: true })
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

  @ManyToMany(() => Class, (classEntity) => classEntity.instructors, {
    nullable: true
  })
  classesTeaching: Class[]

  @OneToMany(() => CheckIn, (checkIn) => checkIn.member, { nullable: true })
  checkIns: CheckIn[]
}
