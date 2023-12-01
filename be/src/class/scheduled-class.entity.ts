import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Class } from './class.entity'
import { CheckIn } from '../check-in/check-in.entity'

@Entity()
export class ScheduledClass extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Class, (classEntity) => classEntity.scheduledClasses)
  class: Class

  @Column()
  startTime: Date

  @OneToMany(() => CheckIn, (checkIn) => checkIn.scheduledClass)
  checkIns: CheckIn[]
}
