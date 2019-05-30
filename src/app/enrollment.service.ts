import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Enrollment} from './enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/enrollments';
  public getEnrollment(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.baseUrl);
  }

  public getEnrollmentId(id: string): Observable<Enrollment> {
    return this.http.get<Enrollment>(this.baseUrl + '/' + id);
  }

  public addEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.baseUrl, enrollment);
  }

  public deleteEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.delete<Enrollment>(this.baseUrl + '/' + enrollment.id);
  }

  public editEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.patch<Enrollment>(this.baseUrl + '/' + enrollment.id, enrollment);
  }
}
