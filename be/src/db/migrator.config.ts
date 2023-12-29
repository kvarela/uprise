import { DataSource } from 'typeorm'
import { join } from 'path'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import * as dotenv from 'dotenv'

dotenv.config()

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)
console.log('__dirname', __dirname)

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ['./src/db/migrations/*.ts']
})
