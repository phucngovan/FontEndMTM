import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Enrollment} from '../../enrollment';
import {Student} from '../../student';
import {Course} from '../../course';
import {Router} from '@angular/router';
import {EnrollmentService} from '../../enrollment.service';
import {StudentService} from '../../student.service';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-add-enrollment',
  templateUrl: './add-enrollment.component.html',
  styleUrls: ['./add-enrollment.component.css']
})
export class AddEnrollmentComponent implements OnInit {
  addForm: FormGroup;
  // submitted = false;
  enrollments: Enrollment[];
  students: Student[];
  courses: Course[];
  get f() { return this.addForm.controls; }
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private enrollmentService: EnrollmentService,
              private studentService: StudentService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
    this.getStudents();
    this.getEnrollments();
    this.addForm = this.formBuilder.group({
      student: [new Student, Validators.required],
      course: [new Course, Validators.required],
      startDate: [''],
      endDate: ['']
    });
  }

  onSubmit() {
    // this.submitted = true;
    //
    // // stop here if form is invalid
    // if (this.addForm.invalid) {
    //   return;
    // }
    this.enrollmentService.addEnrollment(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-enrollment']).then(function() {
          alert('tao thanh cong');
        });
      });
  }
  getStudents(): void {
    this.studentService.getStudent().subscribe(data => this.students = data);
  }
  getCourses(): void {
    this.courseService.getCourse().subscribe(data => this.courses = data);
  }
  getEnrollments(): void {
    this.enrollmentService.getEnrollment().subscribe(data => this.enrollments = data);
  }


}
