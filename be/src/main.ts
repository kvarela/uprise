import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common'
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes()

  // Enable CORS
  app.enableCors()

  // Apply the validation pipe globally
  app.useGlobalPipes(
    new ValidationPipe({
      // You can customize the validation options here
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false
    })
  )

  await app.listen(process.env.PORT || 3000)

  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
