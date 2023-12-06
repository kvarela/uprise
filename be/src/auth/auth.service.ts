import { Injectable } from '@nestjs/common'
import { AuthDto } from './dtos/auth.dto'
import { TwilioService } from './twilio.service'
import { VerifyDto } from './dtos/verify.dto'
import { MemberService } from '../member/member.service'

@Injectable()
export class AuthService {
  constructor(
    private twilioService: TwilioService,
    private memberService: MemberService
  ) {}

  async auth(dto: AuthDto) {
    await this.twilioService.createVerification(dto.phone)
  }

  async verify(dto: VerifyDto) {
    await this.twilioService.checkVerification(dto.phone, dto.code)

    const member = await this.memberService.findOneByPhone(dto.phone)

    if (!member) {
      return this.memberService.create(dto.phone)
    }

    return member
  }
}
