import { Controller, Get, Post, Body,HttpException,HttpStatus } from '@nestjs/common';
//import course structure
import { Course } from './course.entity';
import { CoursesService } from './course.service';
import { CreateCourseDto} from './dto/create-course-dto'


//course route
//@ is declare that in this controller is injectable 
@Controller('courses')
export class CourseController {
  //after this controller created ,Constructor  will inject service automaticly
  //but we must add service to povider in app.module
  constructor(private coursesService:CoursesService){}

  //dont for get to import get in @nestjs/common
  @Get()
  async findAll():Promise<Course[]> {
    console.log('getmethod')
    return this.coursesService.findAll();
  }

  @Post()
  async create(@Body() createCourseDto:CreateCourseDto){
    console.log(createCourseDto)
    if(createCourseDto.number !== undefined && createCourseDto.title !== undefined){
      const newCourse = this.coursesService.create(createCourseDto);
      return newCourse;
    }else{
      //console.log(createCourseDto)
      throw new HttpException('Bad  request',HttpStatus.BAD_REQUEST)
    }
  }
}
