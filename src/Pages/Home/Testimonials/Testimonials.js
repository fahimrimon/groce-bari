import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from './TestimonialsData';
import './Testimonials.css'
import Slider from 'react-slick';

function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='slickgap'>
      <div className='text-center'>
      <h2 className='text-green-500 font-mono text-xl mb-2 mt-24'>Testimonials</h2>
      <h2 className='text-3xl font-hairline font-bold mb-12'>What They Saying</h2>
      </div>
      <Slider {...settings}>
          {testimonialsData.map((item, index) =>(
            <div key={index} className="card h-90 w-32 shadow-lg rounded-xl bg-light">
            <figure className="px-10 py-6 bg-base-200">
              <img src={item.img} alt="img" className="rounded-full w-24 h-24" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <div className="rating py-2">
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
               </div>
              <p className='text-lg'>{item.des}</p>
            </div>
          </div>
          ))}
        </Slider>
    </div>
  )
}

export default Testimonials
