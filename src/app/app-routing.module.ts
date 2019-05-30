import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCourseComponent} from './Course/list-course/list-course.component';
import {AddCourseComponent} from './Course/add-course/add-course.component';
import {EditCourseComponent} from './Course/edit-course/edit-course.component';
import {ListStudentComponent} from './Student/list-student/list-student.component';
import {AddStudentComponent} from './Student/add-student/add-student.component';
import {EditStudentComponent} from './Student/edit-student/edit-student.component';
import {EditEnrollmentComponent} from './Enrollment/edit-enrollment/edit-enrollment.component';
import {ListEnrollmentComponent} from './Enrollment/list-enrollment/list-enrollment.component';
import {AddEnrollmentComponent} from './Enrollment/add-enrollment/add-enrollment.component';

const routes: Routes = [
  {path: 'list-student',
    component: ListStudentComponent},
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'edit-student',
    component: EditStudentComponent
  },
  {
    path: 'list-course',
    component: ListCourseComponent
  },
  {
    path: 'add-course',
    component: AddCourseComponent,
  },
  {
    path: 'edit-course',
    component: EditCourseComponent
  },
  {
    path: 'list-enrollment',
    component: ListEnrollmentComponent
  },
  {
    path: 'add-enrollment',
    component: AddEnrollmentComponent
  },
  {
    path: 'edit-enrollment',
    component: EditEnrollmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
