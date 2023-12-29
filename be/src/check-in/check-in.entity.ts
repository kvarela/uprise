import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Member } from '../member/member.entity'
import { Class } from '../class/class.entity'

@Entity()
export class CheckIn extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Member, (member) => member.checkIns)
  member: Member

  @ManyToOne(() => Class, (c) => c.checkIns)
  class: Class

  @CreateDateColumn()
  createdAt: Date
}
