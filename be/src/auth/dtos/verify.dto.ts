import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator'

export class VerifyDto {
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string

  @IsString()
  @IsNotEmpty()
  code: string
}
