import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CourseController} from './course.controller'
import {CourseService } from './course.service'
@Module({
  imports: [],
  //dont forget to import module
  controllers: [AppController,CourseController],
  providers: [CourseService,AppService],
})
export class AppModule {}
