import React from 'react'
import Banner from '../Banner/Banner'
import Testimonials from '../Testimonials/Testimonials'
import ProductCategory from '../ProductCategory/ProductCategory'
import AboutUs from '../AboutUs/AboutUs'
import SpecialDiscount from '../SpecialDiscount/SpecialDiscount'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <ProductCategory></ProductCategory>
      <SpecialDiscount></SpecialDiscount>
      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Home
