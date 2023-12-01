import { Module } from '@nestjs/common'
import { Class } from './class.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduledClass } from './scheduled-class.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Class, ScheduledClass])],
  controllers: [],
  providers: []
})
export class ClassModule {}
