import  {Entity,Column,ObjectIdColumn}   from 'typeorm';
import {ObjectID} from 'mongodb'

//data mapper is maped database to object

@Entity()
//entity's name is 'Course' is the same as database's name is a convention 
export class Course{
    @ObjectIdColumn()
    id?:ObjectID;

    @Column()
    number:string;

    @Column()
    title:string;

}

export default Course;