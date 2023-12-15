
"use client"
import Pagination from '@/components/pagination'
import ProductList from '@/components/pagination'
import { IProductProps, IRegisterProps } from '@/interfaces'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const Home =  () => {
    const [products,setProducts] = useState<IProductProps[]>()

    let isExistUser:IRegisterProps  = JSON.parse(JSON.stringify(localStorage.getItem('user')) as string) || {} as IRegisterProps    
    if(!Object.keys(isExistUser).length){
     redirect('register-form')
      }


  const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
     const data:IProductProps[]  = await res.json()
     setProducts(data)
     console.log(data);
     
  }

     
   
   useEffect(() => {
     getProducts()
    
   },[])
   
     
        
    
    
     
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