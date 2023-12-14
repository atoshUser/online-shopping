
import Pagination from '@/components/pagination'
import ProductList from '@/components/pagination'
import { IProductProps, IRegisterProps } from '@/interfaces'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async () => {
  
   const res = await fetch(`https://api.escuelajs.co/api/v1/products`)
   const products:IProductProps[] = await res.json()
   
   
      if (typeof window !== 'undefined') {
        let isExistUser:IRegisterProps  = JSON.parse(localStorage.getItem('user') as string) || {} as IRegisterProps    
       if(!Object.keys(isExistUser).length){
        redirect('register-form')
         }
      }
    
     
  return (
  <>
   
   
         { 
         
          products ? ( 
            <div className='flex flex-col pt-[50px] md:pt-[65px] text-black'>
            <Pagination products={products}/>
            </div>
          ) : (
            <div className='relative min-h-screen'>
              <h2 className='text-3xl h-full absolute inset-0 flex items-center justify-center'>Products not found !</h2>
            </div>
          )
         }
    
    </>
  )
}

export default Home