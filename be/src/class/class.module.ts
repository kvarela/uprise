import { Module } from '@nestjs/common'
import { Class } from './class.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  controllers: [],
  providers: []
})
export class ClassModule {}
