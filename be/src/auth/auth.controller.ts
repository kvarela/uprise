import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post()
  async auth(@Body() dto: AuthDto) {
    await this.service.auth(dto)
  }
}
