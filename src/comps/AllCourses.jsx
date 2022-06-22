import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseData, getCoursePartsData } from '../redux/actions/courseAction'
import CourseCard from './CourseCard'
import CoursePartsCard from './CoursePartsCard'

const AllCourses = () => {
    const dispatch = useDispatch()
    const course = useSelector(state => state.course.course_parts)
    const cours = useSelector(state => state.course)
    useEffect(() => {
      dispatch(getCoursePartsData(1))
    },[])
    console.log(course);
  return (
    <div className='row'>
        <div className='row'>
           <h1>All Courses</h1>
        </div>
        <div className='row'>
  {
    course.data &&  course.data.map((item,index) => {
        return  <div className="col-xl-4 col-md- " key={index}>
        <CoursePartsCard course={item} className="d-flex justify-content-between"/>
    </div>
    })
  }
       
       
        </div>

    </div>
  )
}

export default AllCourses