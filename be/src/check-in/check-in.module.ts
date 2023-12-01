import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CheckIn } from './check-in.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CheckIn])],
  controllers: [],
  providers: []
})
export class CheckInModule {}
