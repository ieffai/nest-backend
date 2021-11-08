import { SequelizeModule } from '@nestjs/sequelize';
import { RolesController } from './roles.controller';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';
import { UserRoles } from './user-roles.model';

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles])
      ],
      exports: [
        RolesService
      ]
})
export class RolesModule {}
