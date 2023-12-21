import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Member } from '../member/member.entity'
import { Style } from '../style/style.entity'
import { ScheduledClass } from './scheduled-class.entity'
import { Level } from './level.enum'
import { Gender } from '../gender.enum'

@Entity()
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

  @OneToMany(() => ScheduledClass, (scheduledClass) => scheduledClass.class)
  scheduledClasses: ScheduledClass[]
}
