import React from 'react'

export default function CourseListTable() {
   var courses = [
      { title: 'Java SE', price: 8000, duration: 36 },
      { title: 'Java EE', price: 10000, duration: 40 },
      { title: 'Python', price: 7500, duration: 36 }
   ]
   return (
      <>
         <h1 className="text-danger">Courses</h1>
         <table className="table table-bordered">
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Duration</th>
               </tr>
            </thead>
            <tbody>
               {courses.map((c, idx) =>
                  <tr key={idx}>
                     <td>{c.title}</td>
                     <td>{c.price}</td>
                     <td>{c.duration}</td>
                  </tr>
               )
               }
            </tbody>

         </table>
      </>
   )
}
