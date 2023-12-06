import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Member } from './member.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class MemberService {
  constructor(@InjectRepository(Member) private repo: Repository<Member>) {}

  async create(phone: string): Promise<Member> {
    const member = this.repo.create({ phone })

    await this.repo.save(member)

    return member
  }

  async findOneByPhone(phone: string): Promise<Member> {
    const member = await this.repo.findOne({ where: { phone } })

    return member
  }
}
