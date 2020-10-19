import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses = () => {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

}
