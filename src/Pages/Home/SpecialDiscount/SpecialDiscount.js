import React from 'react'
import "./SpecialDiscount.css"
function SpecialDiscount() {
  return (
    <div className='lg:mx-20 mx-6 my-24'>
      <div className="discount h-[350px] bg-base-200 rounded-xl">
        <div className="px-8 pt-8 pb-2 pl-12">
        <div className='font-hairline'>
        <p className='font-mono font-semibold text-red-500'>Up to 20%</p>
      <h3 className="text-3xl font-bold font-sans text-black pt-px pb-4">Special <span className='text-orange-500'>Discount For All </span><br/>Grocery Products
      </h3>
      <p className='font-hairline text-black pb-7'>Choose your product then get our special <br/> discount offer.</p>

      <div>
         <div className='flex items-center space-x-4'>
            <div data-aos="fade-up"
     data-aos-duration="1000" className='bg-gray-100 shadow-lg h-16 w-20 flex flex-col items-center justify-center rounded-md'>
                <h2 className='text-3xl font-mono font-bold'>05</h2>
                <h2 className='text-sm font-mono'>Days</h2>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="2000" className='bg-gray-100 shadow-lg h-16 w-20 flex flex-col items-center justify-center rounded-md'>
               <h2 className='text-3xl font-mono font-bold'>19</h2>
               <h2 className='text-sm font-mono'>Hours</h2>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="3000" className='bg-gray-100 shadow-lg h-16 w-20 flex flex-col items-center justify-center rounded-md'>
                <h2 className='text-3xl font-mono font-bold'>25</h2>
                <h2 className='text-sm font-mono'>Minutes</h2>
            </div>
         </div>
      </div>

    </div>
     </div>
    </div>
    </div>
  )
}

export default SpecialDiscount
