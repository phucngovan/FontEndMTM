import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  get f() { return this.addForm.controls; }
  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    this.courseService.addCourse(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-course']).then(function() {
          alert('tao thanh cong');
        });
      });
  }

}
