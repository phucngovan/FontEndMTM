import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  get f() { return this.addForm.controls; }

  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.pattern('^(03|09)[0-9]{8}$')]]
      // email: ['', [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]],
      // birthday: ['', Validators.required],
      // gender: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    this.studentService.addStudent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-student']).then(function() {
          alert('tao thanh cong');
        });
      });
  }

}
