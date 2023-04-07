import { useState } from 'react';
import { productsData } from './ProductsData'
import { AiOutlineArrowDown } from 'react-icons/ai';
function ProductCategory() {
  const [data, setData] = useState(productsData);
  const filterProducts = (catItem) =>{
          const result = productsData.filter((currentData) => {
              return currentData.category === catItem;
          });
          setData(result);
  }
  return (
      <div className='mx-20 lg:mt-32 mt-24'>
            <h2 className='text-green-500 font-mono text-center text-xl mb-2'>Online Store</h2>
                    <h2 className='text-3xl text-center font-bold -mb-6 uppercase'>Grocery Display</h2>
                    <div className="dropdown dropdown-right mt-16 -mb-8 lg:mt-8 relative z-10">
                   <div tabIndex={0} className='flex justify-center items-center'>
                    <label className="m-1 text-lg font-semibold">Find Your Category</label>
                   <h2 className='ml-px'><AiOutlineArrowDown /></h2>
                   </div>
                   <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                   <li className='hover:text-lime-500'><button onClick={()=> filterProducts('Fruits')}>Fruits</button></li>
                   <li className='hover:text-lime-500'><button onClick={()=> filterProducts('Vegetables')}>Vegetables</button></li>
                   <li className='hover:text-lime-500'><button onClick={()=> filterProducts('Dairy Products')}>Dairy Products</button></li>
                   <li className='hover:text-lime-500'><button onClick={()=> setData(productsData)}>All</button></li>
                   </ul>
                  </div>
                   <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8'>
                    
                    {data.map((item) =>{
                         return(
                          <>
                          <div key={item.id} className="card card-side bg-base-100 border  border-light rounded-sm ">
                          <figure className=' w-36 p-2'><img className='transition duration-700 hover:scale-95 w-32 h-32' src={item.img} alt="img" /></figure>
                          <div className="card-body">
                            <h2 className="text-xl font-serif hover:text-lime-500">{item.title}</h2>
                          <p className='text-xl'>৳ <span className='text-sm'>{item.price}</span></p>
     
                          <div className="card-actions justify-end">
                          <button className="py-1 px-2 text-sm bg-green-500 hover:bg-black hover:text-white rounded-none border-none -mt-6 -mb-5 rounded">Book Now</button>
                  </div>
                </div>
               </div>
                          </>
                         )
                    })};
                </div>
        </div>
  )
}

export default ProductCategory
