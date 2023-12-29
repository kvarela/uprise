import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import * as dotenv from 'dotenv'
import { CheckIn } from '../check-in/check-in.entity'
import { Class } from '../class/class.entity'
import { Member } from '../member/member.entity'
import { MembershipType } from '../member/membership-type.entity'
import { Style } from '../style/style.entity'

dotenv.config()

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [CheckIn, Class, Member, MembershipType, Style],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ['./src/db/migrations/*.ts']
})
