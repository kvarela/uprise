import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config()

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)
console.log('__dirname', __dirname)

export const TYPEORM_OPTIONS: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  retryAttempts: 2,
  namingStrategy: new SnakeNamingStrategy()
}
