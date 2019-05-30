import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../student.service';
import {first} from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;

  get f() {
    return this.editForm.controls;
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) { }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.pattern('^(03|09)[0-9]{8}$')]]
    });
    const studentId = localStorage.getItem('editStudentId');
    if (!studentId) {
      alert('Invalid action.');
      this.router.navigate(['list-student']);
      return;
    }
    this.studentService.getStudentId(studentId)
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
    this.studentService.editStudent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-student']);
        },
        error => {
          alert(error);
        });
  }

}
