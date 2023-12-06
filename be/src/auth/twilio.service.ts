import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as Twilio from 'twilio'

@Injectable()
export class TwilioService {
  client: Twilio.Twilio

  constructor(private readonly configService: ConfigService) {
    this.client = Twilio(
      this.configService.get('TWILIO_ACCOUNT_SID'),
      this.configService.get('TWILIO_AUTH_TOKEN')
    )
  }

  async checkVerification(to: string, code: string) {
    const data = await this.client.verify.v2
      .services(this.configService.get('TWILIO_SERVICE_SID'))
      .verificationChecks.create({
        to,
        code
      })

    if (data.status !== 'approved') {
      throw new UnauthorizedException('Invalid verification code')
    }
  }

  async createVerification(to: string, channel = 'sms') {
    await this.client.verify.v2
      .services(this.configService.get('TWILIO_SERVICE_SID'))
      .verifications.create({
        to,
        channel
      })
  }
}
