import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div class="navbar bg-black lg:px-16 fixed top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='font-semibold hover:text-green-500'><Link to='/'>Home</Link></li>
                    <li className='font-semibold hover:text-green-500'><Link to='/products'>Products</Link></li>
                    <li className='font-semibold hover:text-green-500'><Link to='/booking'>Booking</Link></li>
                    <li className='font-semibold hover:text-green-500'><Link to='/contact'>Contact Us</Link></li>
                    <li className='font-semibold hover:text-green-500'><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-white text-2xl">groce<span className='text-green-500'>Bari</span></Link>
            </div>
            <div className='navbar-center lg:mr-32 mr-0'>
            <input type="text" placeholder="Search" className="input input-bordered input-sm w-[180px] lg:w-[350px] max-w-sm" />

            </div>
            <div class="navbar-end pr-12 hidden xl:flex text-white font3">
                <ul class="menu menu-horizontal p-0 gap-x-3">
                <li className='font-semibold hover:text-green-500'><Link to='/'>Home</Link></li>
                     <li className='font-semibold hover:text-green-500'><Link to='/products'>Products</Link></li>
                     <li className='font-semibold hover:text-green-500'><Link to='/booking'>Booking</Link></li>
                     <li className='font-semibold hover:text-green-500'><Link to='/contact'>Contact Us</Link></li>
                     <li className='font-semibold border rounded-lg border-green-400 text-green-500 hover:text-green-500 hover:bg-white'><Link to='/contact'>Register</Link></li>
                </ul>
            </div>

        </div>
  )
}

export default Header
