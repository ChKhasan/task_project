import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CarouselBanner from '../comps/CarouselBanner';
import CourseCard from '../comps/CourseCard';
import CoursePartsCard from '../comps/CoursePartsCard';
import { getCoursePartsData, getUserCourseData } from '../redux/actions/courseAction';

const CourseP = () => {
    const dispatch = useDispatch();
    const course = useSelector(state => state.course.course_parts)

    useEffect(() => {
      dispatch(getCoursePartsData(1));
    }, []);
  return (
    <div className='container' style={{minHeight: "100vh"}}>
        <div className="row">
            <div className="col-12">
       <CarouselBanner />

            </div>
        </div>
          <div className="row">
      <div className="row">
        <h1>Courses</h1>
      </div>
      <div className="row">
      {
    course.data &&  course.data.map((item,index) => {
        return  <div className="col-xl-4 col-md- " key={index}>
        <CoursePartsCard course={item} className="d-flex justify-content-between"/>
    </div>
    })
  }
      </div>
    </div>
    </div>
  )
}

export default CourseP