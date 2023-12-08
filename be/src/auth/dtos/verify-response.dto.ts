import { Member } from '../../member/member.entity'

export class VerifyResponseDto {
  jwt: string
  member: Member
}
