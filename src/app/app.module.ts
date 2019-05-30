import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './Course/add-course/add-course.component';
import { ListCourseComponent } from './Course/list-course/list-course.component';
import { EditCourseComponent } from './Course/edit-course/edit-course.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { ListStudentComponent } from './Student/list-student/list-student.component';
import { EditStudentComponent } from './Student/edit-student/edit-student.component';
import { AddEnrollmentComponent } from './Enrollment/add-enrollment/add-enrollment.component';
import { ListEnrollmentComponent } from './Enrollment/list-enrollment/list-enrollment.component';
import { EditEnrollmentComponent } from './Enrollment/edit-enrollment/edit-enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ListCourseComponent,
    EditCourseComponent,
    AddStudentComponent,
    ListStudentComponent,
    EditStudentComponent,
    AddEnrollmentComponent,
    ListEnrollmentComponent,
    EditEnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
