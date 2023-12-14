"use client"
import CustomImageComponent from '@/components/custom-image'
import { IProductProps } from '@/interfaces'
import { Dialog } from '@headlessui/react'
import { notFound, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductModal =  ({params:{id}}:{params:{id:string}}) => {
   const [product,setProduct] = useState<IProductProps>()
     const [open,setOpen] = useState(true)
     const router = useRouter()

      useEffect(() => {
          async function getCard() {
            
              const res = await fetch(`https://fakestoreapi.com/products/${id}`)
              const card:IProductProps = await res.json()
              setProduct(card)
          
          }
          getCard()
      },[id])

     return (
      <div className='h-screen flex items-center justify-center px-2'>
        <div className='fixed inset-0 bg-black/70' onClick={() => router.back()
        }/>
           {
            product ? (
              <div className='w-[700px] overflow-hidden z-30 h-[350px] bg-white rounded-md
              flex flex-col md:flex-row'>
                <div className='relative w-full h-[250px] md:min-w-[250px] md:h-full'>
                   <CustomImageComponent card={product}/>
                </div>
                <div className='flex flex-col overflow-y-auto py-3 md:py-4 md:px-4'>
                  <h3 className='text-[16px] md:text-[20px] font-medium'>{product.title}</h3>
                  <span className='font-medium text-[15px] md:text-[18px]
                  '>{Number(product.price).toLocaleString('en-US',{style:'currency',currency:'USD'})}</span>
                  <p className=' text-sm/relaxed grow'>
                     {product.description}
                  </p>
                  <div className='flex flex-col space-y-3'>
                    <button className='myBtn border rounded-md border-indigo-600 text-sky-600'>Add</button>
                     <button className='myBtn bg-indigo-600 rounded-md text-white border border-transparent
                      hover:border-indigo-600  
                      hover:bg-transparent  hover:text-indigo-700 '>Show all</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='relative flex items-center  justify-center w-[250px] h-[250px] bg-white rounded-md'>
                 <div className='rounded-full w-7 border-2  md:border-4 border-dotted h-7 md:w-9 md:h-9 
                  animate-spin'/>
              </div>
            )
           }
      </div>
     )
 
}

export default ProductModal