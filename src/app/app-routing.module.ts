import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCourseComponent} from './Course/list-course/list-course.component';
import {AddCourseComponent} from './Course/add-course/add-course.component';
import {EditCourseComponent} from './Course/edit-course/edit-course.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
