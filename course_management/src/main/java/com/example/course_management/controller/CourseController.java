package com.example.course_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.course_management.entity.Course;
import com.example.course_management.service.CourseService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/course")
public class CourseController {

	@Autowired
	private CourseService courseService;

	@PostMapping
	public ResponseEntity<?> addCourse(@RequestBody Course course) {
		return ResponseEntity.status(HttpStatus.CREATED).body(courseService.addCourse(course));
	}

	@GetMapping
	public ResponseEntity<?> getActions() {
		return ResponseEntity.ok().body(courseService.getCourses());
	}
}
