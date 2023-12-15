"use client"
import CustomImageComponent from '@/components/custom-image'
import { setProduct } from '@/helper/product-store'
import { IProductProps } from '@/interfaces'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";



const MyProducts = () => {
       const [products,setProducts ] = useState([] as IProductProps[])  
        const [price,setPrice] = useState<number>()

        const totalPrice = () => {
          const total =  products.reduce((total,curVal) => {
               return total + (Number(curVal.price) * curVal.quantity)
           },0)
           return total
        }

        const handleProduct = (product:IProductProps,style: 'add' | 'remove') => {
            switch(style){
              case 'add': 
              setProduct(product,'add')
                break
              case 'remove':
                  setProduct(product,'remove')   
            }
            const data = JSON.parse(localStorage.getItem('products') as string ) as IProductProps[] 
            setProducts(data)
            totalPrice()
        }

    useEffect(() => {
   const data = JSON.parse(localStorage.getItem('products') as string ) as IProductProps[] 
   
   
   setProducts(data)
    

    },[setProduct])
     
 
  

  return (
    <div className="h-screen  bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

      <div className="rounded-lg md:w-2/3">
          {products.map((card) => (

<div key={card.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
<div className="w-full h-[150px] md:h-auto rounded-lg sm:w-40 relative">
   <CustomImageComponent card={card} />
</div>
     <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
       <div className="mt-5 sm:mt-0">
         <h2 className="text-lg font-bold text-gray-900">{card.title}</h2>
         <p className="mt-1 text-xs  text-gray-700">{Number(card.price).toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
       </div>
       <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
         <div className="flex items-center border-gray-100">
           <span onClick={() => handleProduct(card,'remove')} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
           <span className="h-8 w-8 border flex items-center  bg-white justify-center text-xs outline-none"  >{card.quantity}</span>
           <span onClick={() => handleProduct(card,'add')} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
         </div>
         <div className="flex items-center space-x-4">
           <p className="text-sm line-through decoration-2 decoration-red-500 font-bold">{(Number(card.price) * card.quantity).toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
             <span className='self-start text-sm text-green-500 font-bold'>15%</span>
            <p className='font-bold text-sm/snug'> {(Math.floor((Number(card.price) * card.quantity) - ((Number(card.price) * card.quantity) * 0.15))).toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
          <MdDelete className={`text-red-500 w-7 h-7 `}/>
         </div>
       </div>
     </div>
   </div>

          ))}

       
      
      </div>
      
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">{totalPrice().toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
        </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$0.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Discount</p>
          <p className="text-gray-700">15%</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{totalPrice().toLocaleString('es-US',{style:'currency',currency:'USD'})} USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div>
  )
}

export default MyProducts