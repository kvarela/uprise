import { DataSource, DataSourceOptions } from 'typeorm'
import { TYPEORM_OPTIONS } from '../typeorm.options'

export default new DataSource({
  ...(TYPEORM_OPTIONS as DataSourceOptions),
  migrations: ['./src/db/migrations/*.ts']
})
