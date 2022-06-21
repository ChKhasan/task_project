import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CarouselBanner from '../comps/CarouselBanner'
import SliderTemplate from '../comps/SliderTemplate'
import { getAuthorData } from '../redux/actions/authorAction';
import { getBookData } from '../redux/actions/bookAction';
import { getCategoryData } from '../redux/actions/categoryAction';
import { getCourseData } from '../redux/actions/courseAction';

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCourseData());
    dispatch(getCategoryData());
    dispatch(getAuthorData());
    dispatch(getBookData(1));
  }, []);
  return (
    <div className='container-fluid bac_color'>
<CarouselBanner />
<SliderTemplate />
    </div>
  )
}

export default HomePage
