import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Member } from '../member/member.entity'
import { ScheduledClass } from '../class/scheduled-class.entity'

@Entity()
export class CheckIn extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Member, (member) => member.checkIns)
  member: Member

  @ManyToOne(() => ScheduledClass, (scheduledClass) => scheduledClass.checkIns)
  scheduledClass: ScheduledClass

  @CreateDateColumn()
  createdAt: Date
}
