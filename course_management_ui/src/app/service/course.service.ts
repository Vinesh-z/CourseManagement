import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Course } from '../model/Course';
import { Observable } from 'rxjs';
const GET_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  addCourse(course: Course): Observable<any> {
    return this.http.post<any>('http://localhost:8080/course', course, GET_HEADERS);
  }

  getCourses(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/course');
  }
}
