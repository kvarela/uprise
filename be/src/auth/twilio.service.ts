import { Injectable } from '@nestjs/common'
import * as Twilio from 'twilio'

@Injectable()
export class TwilioService {
  client: any

  constructor() {
    this.client = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )
  }

  async createVerification(to: string, channel = 'sms') {
    await this.client.verify.v2.services('').verifications.create({
      to,
      channel
    })
  }
}
