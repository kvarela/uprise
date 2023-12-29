import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm'
import { Member } from '../member/member.entity'
import { Style } from '../style/style.entity'
import { ScheduledClass } from './scheduled-class.entity'
import { Level } from './level.enum'
import { Gender } from '../gender.enum'
import { CheckIn } from '../check-in/check-in.entity'
import { DayOfWeek } from './day-of-week.enum'

@Entity()
@Unique([
  'name',
  'gender',
  'style',
  'instructor',
  'level',
  'minAge',
  'maxAge',
  'durationHours'
])
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ default: Level.ALL })
  level: Level

  @Column({ default: Gender.MIXED })
  gender: Gender

  @ManyToOne(() => Style, (style) => style.classes, { nullable: true })
  style: Style

  @Column({ default: 14 })
  minAge: number

  @Column({ default: Number.MAX_SAFE_INTEGER })
  maxAge: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Member, (member) => member.classesTeaching, {
    nullable: true
  })
  instructor: Member

  @Column({ default: 1, type: 'float' })
  durationHours: number

  @OneToMany(() => CheckIn, (checkIn) => checkIn.class)
  checkIns: CheckIn[]

  @Column({ type: 'float', nullable: false })
  startHour: number

  @Column({ type: 'int' })
  dayOfWeek: DayOfWeek
}
