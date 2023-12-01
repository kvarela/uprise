import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies/snake-naming.strategy'
dotenv.config()

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)

export const dbModule = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  autoLoadEntities: true,
  retryAttempts: 2,
  namingStrategy: new SnakeNamingStrategy()
})
