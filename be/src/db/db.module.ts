import { TypeOrmModule } from '@nestjs/typeorm'
import { TYPEORM_OPTIONS } from '../typeorm.options'

console.log({ TYPEORM_OPTIONS })
export const dbModule = TypeOrmModule.forRoot(TYPEORM_OPTIONS)
