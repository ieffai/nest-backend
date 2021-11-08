import { User } from '../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import {Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Role } from './roles.model';

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=> Role )
    @ApiProperty({example: 'ADMIN', description: 'Unique user\'s role'})
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(()=> User )
    @ApiProperty({example: 'Administrator', description: 'Role\'s description'})
    @Column({type: DataType.INTEGER})
    userId: number;

}