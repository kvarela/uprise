import { Injectable } from '@nestjs/common'
import { AuthDto } from './auth.dto'
import { TwilioService } from './twilio.service'

@Injectable()
export class AuthService {
  constructor(private twilioService: TwilioService) {}

  async auth(dto: AuthDto) {
    await this.twilioService.createVerification(dto.phone)
  }
}
