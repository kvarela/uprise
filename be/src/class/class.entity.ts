import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Member } from '../member/member.entity'
import { Style } from '../style/style.entity'

@Entity()
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Style, (style) => style.classes)
  style: Style

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
}
