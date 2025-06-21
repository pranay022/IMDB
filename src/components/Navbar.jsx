import React from 'react'
import logo from '../logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border-b-1  space-x-8 items-center pl-3 py-2'>
        <img className='w-[110px]' src={logo} alt="" />
        <Link to="/" className='text-orange-600 text-lg font-medium'>Movies</Link>
        <Link to="/watchlist" className='text-orange-600 text-lg font-medium'>Watch List</Link>
    </div>
  )
}

export default Navbar