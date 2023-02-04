import React from 'react'

export default function CourseList() {
  var courses = [
     {title: 'Java SE', price : 8000},
     {title: 'Java EE', price : 10000},
     {title: 'Python', price :  7500}
    ]

  return (
     <>
      <h1 className="text-danger">Courses</h1>
      {courses.map( (c,idx) => 
         <div key={idx}>
            <h2>{c.title}</h2>
            <h3>{c.price}</h3>
            <hr/>
         </div>)
      }
     </>
  )
}
