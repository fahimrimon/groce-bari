import React from 'react'

function AboutUs() {
  const serviceData = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/001/208/158/small/music-equipment-headphone.png",
      title: 'Online Support',
      process:'24/7 Online Support Provide'
    },
    {
      img: "https://www.freeiconspng.com/thumbs/airplane-icon-png/transport-airplane-takeoff-icon--android-iconset--icons8-2.png",
      title: 'Free Shipping',
      process:'Free Home Delivery Offer'
    },
    {
      img: "https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png",
      title: 'Secure Payment',
      process:'Fully Secure Payment System'
      
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/016/314/389/non_2x/money-refund-icon-with-transparent-background-free-png.png",
      title: 'Great Refund Policy',
      process:'Easily Refund Your Product'
      
    }

  ];
  return (
    <div className='my-32'>
        <div className='text-center'>
        <h2 className='text-green-500 font-mono text-xl mb-2'>About Us</h2>
      <h2 className='text-3xl font-hairline font-bold mb-4'>Why We Are The Best?</h2>
      <h2 className='font-mono mb-8'>We provide fresh and healthy products and the best service to the customer, which always needs customers.</h2>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 my-20 lg:mx-20 mx-8'>
            
            {serviceData.map((item) => (
            <div className="card-body border-2 border-green-500">
            <div className='flex justify-between items-center space-x-6'>
               <div className=''>
               <img className='h-16 w-16' src={item.img} alt=''/>
               </div>
               <div>
               <h2 className="card-title">{item.title}</h2>
               <span className='text-sm'>{item.process}</span>
               </div>
            </div>
              </div>
            ))}
        </div>
      
    </div>
  )
}

export default AboutUs
