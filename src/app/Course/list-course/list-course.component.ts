import { Component, OnInit } from '@angular/core';
import {Course} from '../../course';
import {Router} from '@angular/router';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: Course[];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses(): void {
    this.courseService.getCourse().subscribe(data => this.courses = data);
  }
  deleteCourses(course: Course): void {
    this.courseService.deleteCourse(course)
      .subscribe( data => {
        this.courses = this.courses.filter(u => u !== course);
      });
  }
  editCourses(course: Course): void {
    localStorage.removeItem('editCourseId');
    localStorage.setItem('editCourseId', course.id.toString());
    this.router.navigate(['edit-course']);
  }

}
