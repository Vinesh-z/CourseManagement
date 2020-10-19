package com.example.course_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.course_management.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {

}
