import Link from 'next/link'
import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";


const NavbarComponent = () => {
  return (
    <header className='flex items-center fixed left-0 right-0 z-50  bg-black/60 justify-between py-2 px-2 md:px-6 md:py-3'>
        <Link 
         href={'/'}>
  <HiShoppingBag className={`w-6 h-6 md:w-10 text-white md:h-10`}/>
        </Link>
        <nav className='flex items-center text-white space-x-4'>
          <Link href={'/about'} className='myBtn text-center border rounded-md border-white font-medium'>
            About
          </Link>
          <Link href={'/my-products'} className='myBtn rounded-md text-black text-center transition-all duration-300 border
           border-transparent hover:border-white hover:bg-black/60 hover:text-white bg-white font-medium'>
            My bag
          </Link>
        </nav>
    </header>
  )
}

export default NavbarComponent