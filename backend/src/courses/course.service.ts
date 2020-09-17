
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { Repository} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import  Course  from './course.entity'; 
import { CreateCourseDto } from './dto/create-course-dto';
import { identity } from 'rxjs';
//injectable is able to inject this service to another controller
@Injectable()
export class CoursesService{

  //create object repository for finding object in database directly
  constructor(
    @InjectRepository(Course) 
    private courseRepository:Repository<Course>
  ){}

  //why using async
  async findAll(): Promise<Course[]>{
    //finding data form database using repository api that inject from above
    return this.courseRepository.find();
  }


  //update value in datebase
  async create(createCourseDto:CreateCourseDto){
    return this.courseRepository.save(createCourseDto);
  }
}