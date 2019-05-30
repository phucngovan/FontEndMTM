import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api/students';

  public getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  public getStudentId(id: string): Observable<Student> {
    return this.http.get<Student>(this.baseUrl + '/' + id);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  public deleteStudent(student: Student): Observable<Student> {
    return this.http.delete<Student>(this.baseUrl + '/' + student.id);
  }

  public editStudent(student: Student): Observable<Student> {
    return this.http.patch<Student>(this.baseUrl + '/' + student.id, student);
  }
}
