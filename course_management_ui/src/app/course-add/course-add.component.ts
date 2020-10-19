import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../model/Course';
import { CourseService } from '../service/course.service';
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  courseForm: FormGroup;
  course: Course = new Course();
  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    this.formControl();
  }
  formControl = () => {
    this.courseForm = this.formBuilder.group({
      courseId: new FormControl('', Validators.required),
      courseName: new FormControl('', Validators.required),
      courseDuration: new FormControl('', Validators.required),
      courseFee: new FormControl('', Validators.required),
      preRequisite: new FormControl('', Validators.required)
    });
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.courseForm.controls;
  }

  addCourse = () => {
    this.course = this.courseForm.value;
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe(data => {
      console.log(data);
    });
  }
}
