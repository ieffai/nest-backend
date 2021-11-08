import { UserRoles } from './user-roles.model';
import { ApiProperty } from '@nestjs/swagger';
import {Model, Table, Column, DataType, BelongsToMany} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Unique user\'s role'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: boolean;

    @ApiProperty({example: 'Administrator', description: 'Role\'s description'})
    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @BelongsToMany(()=> User, () => UserRoles)
    users: User[];
}