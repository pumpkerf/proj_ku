import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {CourseController} from './course.controller'
import {CoursesService } from './course.service'
import Course from './course.entity'

@Module({
    //import  repository for each entities can connect database directly
    imports:[TypeOrmModule.forFeature([Course])],
    controllers:[CourseController],
    providers:[CoursesService],
})

export class CoursesModule{}