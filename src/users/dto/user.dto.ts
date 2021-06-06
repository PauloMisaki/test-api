import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsEnum,
} from 'class-validator';
import { isCpf } from 'src/decorators/isCpf';
import { Skills, UserStatus } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @isCpf()
  cpf: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('BR')
  phone?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsEnum(Skills, { each: true })
  skills: Skills[];
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @isCpf()
  cpf?: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('BR')
  phone?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsEnum(Skills, { each: true })
  skills?: Skills[];

  @IsOptional()
  @IsString()
  @IsEnum(UserStatus)
  status?: UserStatus;
}
