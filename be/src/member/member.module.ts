import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Member } from './member.entity'
import { MembershipType } from './membership-type.entity'
import { MemberService } from './member.service'

@Module({
  imports: [TypeOrmModule.forFeature([Member, MembershipType])],
  controllers: [],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
