import { IProductProps } from '@/interfaces'
import React from 'react'

interface IProductList {
    products:IProductProps[]
}

const ProductList:React.FC<IProductList> = ({products}) => {
  return (
    <div>ProductList</div>
  )
}

export default ProductList