import {Student} from './student';
import {Course} from './course';

export class Enrollment {
  id: number;
  student: Student;
  course: Course;
  startDate: Date;
  endDate: Date;
}
