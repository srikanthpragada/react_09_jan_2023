import React from 'react'

function CourseDetails({course}) {
   return (
       <h3>Course Details</h3>
   )
}
export default function ListCourses({courses}) {
  return (
     <>
      <h1 className="text-danger">Courses</h1>
      {
         courses.map( (c,idx) => 
             <CourseDetails key={idx} course={c} />
         )
      }
     </>
  )
}
