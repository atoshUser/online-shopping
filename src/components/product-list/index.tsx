import { IProductProps } from '@/interfaces'
import React from 'react'
import CardComponent from '../card'

interface IProductList {
    products:IProductProps[]
}

const ProductList:React.FC<IProductList> = ({products}) => {
  return (
       <ul className='px-1 md:px-5 grid grid-cols-2 gap-2 md:gap-5 sm:grid-cols-3 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[400px]'>
          {products.map((card) => (
             <CardComponent card={card} key={card.id}/>
          ))}
       </ul>
  )
}

export default ProductList