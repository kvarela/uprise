import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { TwilioService } from './twilio.service'
import { MemberModule } from '../member/member.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use an environment variable for the secret
      signOptions: { expiresIn: '10y' } // Token expiration time
    }),
    MemberModule
  ],
  controllers: [AuthController],
  providers: [AuthService, TwilioService]
})
export class AuthModule {}
