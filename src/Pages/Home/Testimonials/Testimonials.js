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
        autoplay: true,
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
      <h2 className='text-green-500 text-xl mb-2 mt-24'>Testimonials</h2>
      <h2 className='text-3xl font-bold mb-12'>What They Saying</h2>
      </div>
      <Slider {...settings}>
          {testimonialsData.map((item, index) =>(
            <div key={index} className="card h-80 w-32 shadow-xl rounded-xl bg-light hover:bg-green-300">
            <figure className="px-10 pt-5">
              <img src={item.img} alt="img" className="rounded-xl w-16 h-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p className='text-lg'>{item.des}</p>
              <div className="card-actions">
              </div>
            </div>
          </div>
          ))}
        </Slider>
    </div>
  )
}

export default Testimonials
