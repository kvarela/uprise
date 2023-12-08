import { Injectable } from '@nestjs/common'
import { AuthDto } from './dtos/auth.dto'
import { TwilioService } from './twilio.service'
import { VerifyDto } from './dtos/verify.dto'
import { MemberService } from '../member/member.service'
import { VerifyResponseDto } from './dtos/verify-response.dto'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { Member } from '../member/member.entity'

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private twilioService: TwilioService,
    private memberService: MemberService
  ) {}

  async auth(dto: AuthDto) {
    this.checkPhoneNumber(dto.phone)
    await this.twilioService.createVerification(dto.phone)
  }

  generateJwt(member: Member) {
    return this.jwtService.sign({ sub: member.id })
  }

  async verify(dto: VerifyDto): Promise<VerifyResponseDto> {
    this.checkPhoneNumber(dto.phone)
    await this.twilioService.checkVerification(dto.phone, dto.code)

    const member =
      (await this.memberService.findOneByPhone(dto.phone)) ||
      (await this.memberService.create(dto.phone))

    const jwt = this.generateJwt(member)

    return {
      jwt,
      member
    }
  }

  checkPhoneNumber(phone: string) {
    // Ensure phone matches regex
    if (!phone.match(/^\+[1-9]\d{1,14}$/)) {
      throw new Error('Invalid phone number')
    }
  }
}
