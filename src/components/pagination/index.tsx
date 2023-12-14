"use client"
import { IProductProps, IRegisterProps } from '@/interfaces'
import React, { useEffect, useState } from 'react'
import ProductList from '../product-list'


interface IPagination {
    products:IProductProps[]
}

const Pagination:React.FC<IPagination> = ({products}) => {
     const [productsData,setProductsData] = useState<IProductProps[]>()
      const [user,setUser] = useState<IRegisterProps>( JSON.parse(localStorage.getItem('user') as string) || {})
    const [page,setPage] = useState<number>(1)
    const [perPage,setPerPage] = useState(10)
     const listPage = Array.from({length:Math.ceil(products.length / 10)},(_,idx) => idx + 1)

  
  
     
     
      useEffect(() => {
        const firstIndexOf = page * perPage
        const lastIndexOf = firstIndexOf + 10
        const data = products.slice(firstIndexOf,lastIndexOf) 
        setProductsData(data)
      },[page])     
    
       
  return (
    <div className='flex flex-col pt-10 space-y-3'>
  <div className='flex flex-col justify-center'>
    
   <h2 className=' text-center font-bold text-[18px] md:text-[25px] text-sky-500'>Welcom {user.username} !</h2>
    <p className='text-center text-[16px] md:text-[22px] text-purple-700 font-medium mt-0'>You can find everything!</p>
  </div>
       
   

 
{productsData ? (

<div className='flex flex-col'>
<ProductList products={productsData}/>
        <ul className={`flex cursor-pointer  justify-center gap-1 text-xs font-medium`}>
        {listPage.map((item,idx) => (
           <li  onClick={() => setPage(item)} className={`${item == page && 'bg-sky-500 text-white'} inline-flex h-8 w-8 items-center
            justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180`} key={item}>{item}</li>
        ))}
      
      </ul>

</div>
    ) : null}

   
    </div>
  )
}

export default Pagination