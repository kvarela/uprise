import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { TwilioService } from './twilio.service'

@Module({
  controllers: [AuthController],
  providers: [AuthService, TwilioService]
})
export class AuthModule {}
