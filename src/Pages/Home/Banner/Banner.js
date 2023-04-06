import React from 'react'
import banner from '../../../assets/Images/banner.png'

function Banner() {
  return (
    <div>
      <div className="hero lg:h-[80vh] h-[90vh] bg-yellow-100 mt-12">
        <div className="hero-content flex-col lg:flex-row">
        <div className='font-hairline mt-12 lg:mt-0'>
        <p className='font-sens font-normal' data-aos="fade-up" data-aos-duration="1000"
     >100% Organic Food Provide</p>
      <h3 className="text-7xl font-serif pt-2 pb-6" data-aos="fade-up"
     data-aos-duration="2000">Fresh & Testy 
      Vegetarian Foods
      </h3>
      <p className='font-hairline pb-8 max-w-md leading-relaxed'>We provide fresh and tasty food, so buy your groceries and easily deliver them to your doorstep.</p>
      <button data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="2000" className="btn bg-red-400 rounded-full hover:bg-yellow-100 border border-red-300 hover:text-black px-7 ">Shop Now</button>
    </div>
       <div className='h-[70vh]'>
       <img src={banner} className="h-full" alt=''/>
       </div>
     </div>
    </div>
    </div>
  )
}

export default Banner
