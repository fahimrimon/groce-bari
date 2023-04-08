import React from 'react'
import banner from '../../../assets/Images/banner.png'
import './Banner.css';

function Banner() {
  return (
    <>
      <div className="hero lg:h-[80vh] sm:h-screen bg-yellow-100 relative z-10 mt-12">
        <div className="hero-content flex-col lg:flex-row">
        <div className='font-hairline mt-12 lg:mt-0'>
      <h3 className="text-7xl font-serif pt-2 pb-6" data-aos="fade-up"
     data-aos-duration="2000">Fresh & Testy 
      Vegetarian Foods
      </h3>
      <p className='font-mono pb-8 max-w-md leading-relaxed' data-aos="fade-up"
     data-aos-duration="2500">We provide fresh and tasty food, so buy your groceries and easily deliver them to your doorstep.</p>
      <button data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000" className="btn bg-green-500 rounded-full hover:bg-yellow-100 border border-lime-500 hover:text-black px-7 ">Shop Now</button>
    </div>
       <img src={banner} className="lg:h-[70vh] h-[50vh] lg:w-[80vw] w-[90vw]" alt=''/>
     </div>
    </div>


    <div className=' mx-8 lg:w-4/6 mx-auto mt-[-50px] relative z-20'>
    <div className='lg:flex lg:space-x-4'>
    <div className="offerTab1 h-[220px] bg-base-200 rounded-xl lg:w-3/6">
        <div className="px-8 pt-6 pb-4">
        <div className='font-hairline'>
        <p className='font-mono font-semibold text-red-500'>Super Offer</p>
      <h3 className="text-2xl font-semibold font-sans text-white pt-px pb-4">Organic Foods
      </h3>
      <p className='font-hairline text-sm font-semibold text-white pb-7'>BUY 1 GET 1 FREE</p>
      <button className="bg-orange-500 text-white rounded-md py-1 px-4">Explore</button>
    </div>
     </div>
    </div>

    <div className="offerTab2 h-[220px] bg-base-200 rounded-xl lg:w-3/6 mt-3 lg:mt-0">
        <div className="px-8 pt-6 pb-4">
        <div className='font-hairline'>
        <p className='font-mono font-semibold text-red-500'>Limited Time Offer</p>
      <h3 className="text-2xl font-semibold font-sans text-white pt-px pb-8">Organic Foods Up <br/> To 50% Off
      </h3>
      <button className="bg-green-500 text-white rounded-md py-1 px-4">Explore</button>
    </div>
     </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Banner
