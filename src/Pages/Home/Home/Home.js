import React from 'react'
import Banner from '../Banner/Banner'
import Testimonials from '../Testimonials/Testimonials'
import ProductCategory from '../ProductCategory/ProductCategory'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <ProductCategory></ProductCategory>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
