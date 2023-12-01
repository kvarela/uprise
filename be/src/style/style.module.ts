import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Style } from './style.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Style])],
  controllers: [],
  providers: []
})
export class StyleModule {}
