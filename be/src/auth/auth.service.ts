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
    this.checkPhoneNumber(dto.phone)
    await this.twilioService.createVerification(dto.phone)
  }

  async verify(dto: VerifyDto) {
    this.checkPhoneNumber(dto.phone)
    await this.twilioService.checkVerification(dto.phone, dto.code)

    const member = await this.memberService.findOneByPhone(dto.phone)

    if (!member) {
      return this.memberService.create(dto.phone)
    }

    return member
  }

  checkPhoneNumber(phone: string) {
    // Ensure phone matches regex
    if (!phone.match(/^\+[1-9]\d{1,14}$/)) {
      throw new Error('Invalid phone number')
    }
  }
}
