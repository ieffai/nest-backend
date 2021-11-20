import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';
export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'Email address'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Wrong email'})
    readonly email: string;

    @ApiProperty({example: '123123123', description: 'Password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'Not less then 4 and not more the 16 symbols'} )
    readonly password: string;
}