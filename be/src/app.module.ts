import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbModule } from './db/db.module';
import { MemberModule } from './member/member.module';
import { ConfigModule } from '@nestjs/config';
import { ClassModule } from './class/class.module';
import { StyleModule } from './style/style.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule globally available
    }),
    dbModule,
    MemberModule,
    ClassModule,
    StyleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
