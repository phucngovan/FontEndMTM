import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/courses';

  public getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  public getCourseId(id: string): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + '/' + id);
  }

  public addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  public deleteCourse(course: Course): Observable<Course> {
    return this.http.delete<Course>(this.baseUrl + '/' + course.id);
  }

  public editCourse(course: Course): Observable<Course> {
    return this.http.patch<Course>(this.baseUrl + '/' + course.id, course);
  }
}
