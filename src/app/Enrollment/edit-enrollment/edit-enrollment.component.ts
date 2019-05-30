import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Student} from '../../student';
import {Course} from '../../course';
import {EnrollmentService} from '../../enrollment.service';
import {StudentService} from '../../student.service';
import {CourseService} from '../../course.service';
import {Enrollment} from '../../enrollment';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-enrollment',
  templateUrl: './edit-enrollment.component.html',
  styleUrls: ['./edit-enrollment.component.css']
})
export class EditEnrollmentComponent implements OnInit {
  editForm: FormGroup;
  enrollments: Enrollment[];
  students: Student[];
  courses: Course[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private enrollmentService: EnrollmentService,
              private studentService: StudentService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
    this.getStudents();
    this.getEnrollments();
    this.editForm = this.formBuilder.group({
      id: [''],
      student: [new Student, Validators.required],
      course: [new Course, Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    const enrollmentId = localStorage.getItem('editEnrollmentId');
    if (!enrollmentId) {
      alert('Invalid action.');
      this.router.navigate(['list-enrollment']);
      return;
    }
    this.enrollmentService.getEnrollmentId(enrollmentId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.enrollmentService.editEnrollment(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-enrollment']);
        },
        error => {
          alert(error);
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
