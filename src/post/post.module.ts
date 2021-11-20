import { FilesModule } from './../files/files.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { User } from 'src/users/users.model';
import { Post } from './post.model';

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    FilesModule
  ]
})
export class PostModule {}
