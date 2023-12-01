import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Member } from './member.entity'
import { MembershipType } from './membership-type.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Member, MembershipType])],
  controllers: [],
  providers: []
})
export class MemberModule {}
