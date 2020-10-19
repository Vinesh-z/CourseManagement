package com.example.course_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.course_management.entity.Course;
import com.example.course_management.repository.CourseRepository;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRepo;

	public Course addCourse(Course course) {
		return courseRepo.save(course);
	}

	public List<Course> getCourses() {
		return courseRepo.findAll();
	}
}
