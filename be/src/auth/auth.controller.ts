import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dtos/auth.dto'
import { ApiOperation } from '@nestjs/swagger'
import { VerifyDto } from './dtos/verify.dto'

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @ApiOperation({
    summary:
      "For registration or log in. Any time the client doesn't have a valid JWT, they should call /auth"
  })
  @Post()
  async auth(@Body() dto: AuthDto) {
    await this.service.auth(dto)
  }

  @Post('/verify')
  async verify(@Body() dto: VerifyDto) {
    await this.service.verify(dto)
  }
}
