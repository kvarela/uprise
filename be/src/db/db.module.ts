import { TypeOrmModule } from '@nestjs/typeorm';

export const dbModule = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  autoLoadEntities: true,
  retryAttempts: 2,
});
