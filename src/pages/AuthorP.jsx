import React from 'react'
import { useSelector } from 'react-redux'
import AuthorCard from '../comps/AuthorCard'
import CarouselBanner from '../comps/CarouselBanner'

const AuthorP = () => {
    const author = useSelector(state => state.author.author_data.data)
    console.log(author);
  return (
    <div className='container' >
       <CarouselBanner />
       <h1>Authors</h1>
       <div className="row">
        {
         author && author.map((item,index) => {
            return  <div className="col-xl-4 col-md-6 mb-3">
            <AuthorCard item={item} key={index} />
          </div>
         })   
        }
        </div> 
    </div>
  )
}

export default AuthorP