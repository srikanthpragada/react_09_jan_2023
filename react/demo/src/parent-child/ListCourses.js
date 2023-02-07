import React from 'react'

// Child 
function CourseDetails({ course }) {
   return (
      <>
         <h3>{course.title}</h3>
         <h4>{course.fee}</h4>
         <h4>{course.duration}</h4>
      </>
   )
}

// parent 
export default function ListCourses({ courses }) {
   return (
      <>
         <h1 className="text-danger">Courses</h1>
         {
            courses.map((c, idx) =>
               <CourseDetails key={idx} course={c} />
            )
         }
      </>
   )
}
