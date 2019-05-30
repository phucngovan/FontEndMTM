import { Component, OnInit } from '@angular/core';
import {Enrollment} from '../../enrollment';
import {Router} from '@angular/router';
import {EnrollmentService} from '../../enrollment.service';

@Component({
  selector: 'app-list-enrollment',
  templateUrl: './list-enrollment.component.html',
  styleUrls: ['./list-enrollment.component.css']
})
export class ListEnrollmentComponent implements OnInit {
  enrollments: Enrollment[];

  constructor(private router: Router, private enrollmentService: EnrollmentService) { }

  ngOnInit() {
    this.getEnrollments();
  }
  getEnrollments(): void {
    this.enrollmentService.getEnrollment().subscribe(data => this.enrollments = data);
  }
  deleteEnrollments(enrollment: Enrollment): void {
    this.enrollmentService.deleteEnrollment(enrollment)
      .subscribe( data => {
        this.enrollments = this.enrollments.filter(u => u !== enrollment);
      });
  }
  editEnrollments(enrollment: Enrollment): void {
    localStorage.removeItem('editEnrollmentId');
    localStorage.setItem('editEnrollmentId', enrollment.id.toString());
    this.router.navigate(['edit-enrollment']);
  }

}
