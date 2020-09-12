import { Controller, Get } from '@nestjs/common';

//default route
@Controller('courses')
export class CourseController {
  
  @Get()
  findAll(): any {
    return {message: 'hello'};
  }
}
