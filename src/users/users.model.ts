import { Post } from './../post/post.model';
import { UserRoles } from '../roles/user-roles.model';
import { ApiProperty } from '@nestjs/swagger';
import {Model, Table, Column, DataType, BelongsToMany, HasMany} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: 'Email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123123123', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'For breaking service rules', description: 'Ban reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(()=> Role, () => UserRoles)
    roles: Role[];

    @HasMany(()=> Post)
    post: Post[];
}