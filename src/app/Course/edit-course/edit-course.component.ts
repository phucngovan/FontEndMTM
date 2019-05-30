import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CourseService} from '../../course.service';
import {first} from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;

  get f() {
    return this.editForm.controls;
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
    const courseId = localStorage.getItem('editCourseId');
    if (!courseId) {
      alert('Invalid action.');
      this.router.navigate(['list-course']);
      return;
    }
    this.courseService.getCourseId(courseId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    this.courseService.editCourse(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-course']);
        },
        error => {
          alert(error);
        });
  }

}
