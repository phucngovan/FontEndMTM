import { Component, OnInit } from '@angular/core';
import {Student} from '../../student';
import {Router} from '@angular/router';
import {StudentService} from '../../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Student[];

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService.getStudent().subscribe(data => this.students = data);
  }
  deleteStudents(student: Student): void {
    this.studentService.deleteStudent(student)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      });
  }
  editStudents(student: Student): void {
    localStorage.removeItem('editStudentId');
    localStorage.setItem('editStudentId', student.id.toString());
    this.router.navigate(['edit-student']);
  }

}
