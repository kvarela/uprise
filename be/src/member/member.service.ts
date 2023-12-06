import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Member } from './member.entity'

@Injectable()
export class MemberService {
  constructor(private repo: Repository<Member>) {}

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
