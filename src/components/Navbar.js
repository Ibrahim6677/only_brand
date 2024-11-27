import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center lg:p-4 md:p-4'>
      <div className='flex justify-between md:px-6 lg:px-8 md:hidden lg:flex sm:hidden xs:hidden'>
        <Link to='/'><li className='mr-10 list-none cursor-pointer text-gray-600'>New Arrival</li></Link>
        <Link to='/men'><li className='mr-10 list-none cursor-pointer text-gray-600'>Men</li></Link>
        <Link to='/women'><li className='mr-10 list-none cursor-pointer text-gray-600'>Women</li></Link>
      </div>
      <select className="md-text-sm lg:hidden md:flex xs:hidden pr-5 xs-text-xs w-30">
          <option><Link to="/">New Arrival</Link></option>
          <option><Link to="/men">Men</Link></option>
          <option><Link to='/women'>Women</Link></option>
        </select>
      <div class="md:flex lg:flex xs:hidden sm:hidden">
        <Link to='/'><img src='/images/logo/logo yet.png' width={130} alt='logo' className='cursor-pointer'/></Link>
      </div>
      <div className='flex justify-between sm:hidden xs:hidden lg:flex md:flex space-x-6'>
        <li className='lg:px-8 list-none cursor-pointer'>
          <Link to='/search'><SearchIcon className='text-gray-600'/></Link>
        </li>
        <li className='lg:px-8 list-none cursor-pointer'>
          <FavoriteBorderIcon className='text-gray-600'/>
        </li>
        <li className='lg:px-8 list-none cursor-pointer'>
          <Link to='/cart'><ShoppingCartIcon className='text-gray-600'/></Link>
        </li>
        <li className='lg:px-5 list-none cursor-pointer'>
          <Link to='/sign'><PersonOutlineIcon className='text-gray-600'/></Link>
        </li>
      </div>
      {/* sm and xs */}
      <div className="flex flex-col items-center p-4 space-y-4 w-full mx-auto sm:flex xs:flex md:hidden lg:hidden">
      {/* الشريط العلوي */}
      <div className="flex items-center justify-between w-full max-w-md">
        {/* القائمة المنسدلة */}
        <select className="xs-text-xs sm:w-25">
          <option><Link to="/">New Arrival</Link></option>
          <option><Link to="/men">Men</Link></option>
          <option><Link to='/women'>Women</Link></option>
        </select>

        {/* الشعار */}
        <img className='cursor-pointer sm-w-60 xs-w-20 xs:px-4' src="/images/logo/logo yet.png" width={130} alt="logo" />

        {/* أيقونة المفضلة */}
          <FavoriteBorderIcon />
        <shoppingCartIcon />
      </div>

      {/* مربع البحث */}
      <div className="flex items-center w-full max-w-md p-2 border border-gray-300 rounded-full bg-white">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search For Only Brand"
          className="flex-grow px-2 text-gray-700 bg-transparent focus:outline-none"
        />
        {/* <FaSync className="text-gray-500 mr-2 cursor-pointer" /> */}
      </div>
    </div>
    </div>
  )
}

export default Navbar