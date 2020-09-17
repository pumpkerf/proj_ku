import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import Course from './courses/course.entity'
import {CoursesModule} from './courses/courses.module'
@Module({
  imports: [
    //import type of mongodb
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test2',
      entities: [Course],
      synchronize: true,
    }),
    CoursesModule,
  ],
  //dont forget to import module
  controllers: [AppController],
  //provider is an injectable modules
  providers: [AppService],
})
export class AppModule {}
