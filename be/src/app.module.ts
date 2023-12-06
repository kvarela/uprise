import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { dbModule } from './db/db.module'
import { MemberModule } from './member/member.module'
import { ConfigModule } from '@nestjs/config'
import { ClassModule } from './class/class.module'
import { StyleModule } from './style/style.module'
import { CheckInModule } from './check-in/check-in.module'
import { AuthModule } from './auth/auth.module'
import { CONFIG_OPTIONS } from './config.options'

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTIONS),
    dbModule,
    MemberModule,
    ClassModule,
    StyleModule,
    CheckInModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
