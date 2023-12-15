"use client"
import CustomImageComponent from '@/components/custom-image'
import { IProductProps } from '@/interfaces'
import React, { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { setProduct } from '@/helper/product-store';

const ProductDetail = ({params:{id}}:{params:{id:string}}) => {
     const [card,setCard] = useState<IProductProps>({} as IProductProps)
      const router = useRouter()
     useEffect(() => {
         async function getProduct () {
             const res = await fetch(`https://fakestoreapi.com/products/${id}`)
             const data:IProductProps = await res.json()
             setCard(data)
         }
         getProduct()
     },[id])


  const handleProduct = () => {
    setProduct(card,'add')
    router.push('/')
  }

  return (
    <div className='h-screen flex items-center justify-center'>
     <div className='fixed inset-0 bg-black/60 -z-10'/>
        { card ? (
            <div className='max-w-[900px]
             w-full h-[450px] bg-white
        flex flex-col md:flex-row space-x-3     rounded-md overflow-hidden'>
               <div className='relative  md:max-w-[350px] md:h-full
          w-full min-h-[250px]      '>
            <CustomImageComponent card={card}/>
          </div>
            <div className='flex flex-col overflow-y-auto'>
                   <h3 className='text-black text-[16px] md:text-[22px]
                   font-bold'>{card.title}</h3>
                    <span className='text-purple-500 font-medium'>{card.category}</span>
                   <div className='flex items-center space-x-3'>
                       <div className='flex items-center'>
                          {Array.from({length:Math.floor(card.rating?.rate)},(_,idx) => (
                             <IoIosStar key={idx} className={`text-yellow-400 w-7 h-7 `}/>
                          ))}
                          {Array.from({length:5 - Math.floor(card.rating?.rate)},(_,idx) => (
  <FaRegStar key={idx} className={`text-yellow-400 w-7 h-7 `}/>
                          ))}
                       </div>
                       <p className='underline underline-offset-2 decoration-2 decoration-blue-800'>See {card.rating?.count} views</p>
                   </div>
                   <p className='text-sm/relaxed px-2 mt-3'>{card.description}</p>
                   <div className='grow flex flex-col space-y-2 md:space-y-0 md:flex-row items-center w-full pb-2 md:pb-4 px-2 md:space-x-2'>
                    <button onClick={handleProduct} className='flex myBtn justify-center rounded-md  w-full bg-black/80 items-center self-end space-x-2'>
                      <span className='text-white'>Buy</span>
                      <FaMoneyBillWave className={`text-green-400`}/>
                       <span className='font-medium  text-green-800
                       text-[15px]'>{Number(card.price).toLocaleString('en-US',{style:'currency',currency:'USD'})}</span>
                    </button>
                    <button onClick={() => router.push('/')} className='flex justify-center border border-dashed border-red-500  myBtn
                     rounded-md space-x-2 w-full items-center self-end'>
                        <span>Home</span>
                          <TiHome className={`text-red-600`}/>
                    </button>
                   </div>

            </div>
            </div>
        ) : (
            <div className='w-[250px] h-[250px] bg-white rounded-md flex 
            items-center justify-center'>
                 <div className='w-7 h-7 md:h-10 md:w-10 border-2 md:border-4 
                 border-dotted border-indigo-500 animate-spin'/>
            </div>
        )}
    </div>
  )
}

export default ProductDetail