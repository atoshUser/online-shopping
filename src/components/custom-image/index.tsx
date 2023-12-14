import { IProductProps } from '@/interfaces'
import Image from 'next/image'
import React, { useState } from 'react'
interface ICustomImageProps {
    card:IProductProps
}
const CustomImageComponent:React.FC<ICustomImageProps> = ({card}) => {
     const [loading,setLoading] = useState(true)
  return (
    <>
    <Image
     src={card.image}
     alt={card.title}
     fill
     sizes='auto'
     className={`object-contain transition-all duration-700
       ${loading ? `blur-2xl grayscale scale-110` : `blur-none grayscale-0 scale-100`}
     `}
     onLoad={() => setLoading(false)}
    />
    </>
  )
}

export default CustomImageComponent