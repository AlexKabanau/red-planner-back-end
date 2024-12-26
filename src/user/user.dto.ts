import { Optional } from '@nestjs/common'
import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	Min,
	MinLength
} from 'class-validator'

export class PomodoroSettingsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	breakInterval?: number

	@IsOptional()
	@IsNumber()
	@Max(10)
	intervalCount?: number
}

export class UserDto extends PomodoroSettingsDto {
	@IsEmail()
	@Optional()
	email?: string

	@IsString()
	@Optional()
	name?: string

	@IsString()
	@Optional()
	@MinLength(6, {
		message: 'Password must be at leas 6 characters long'
	})
	password?: string
}
