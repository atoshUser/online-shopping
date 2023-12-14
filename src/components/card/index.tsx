import { IProductProps } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import moment from 'moment'
import CustomImageComponent from '../custom-image'
import Link from 'next/link'

interface ICardProps {
    card:IProductProps
}

const CardComponent:React.FC<ICardProps> = ({card}) => {
  return ( 
    <Link href={`/product-modal/${card.id}`}>
    
    <article className="overflow-hidden  h-full rounded-lg shadow transition hover:shadow-lg">
 <div className='relative h-56 w-full "'>
   <CustomImageComponent card={card}/>
 </div>

  <div className="bg-white p-1 md:p-3">
   <div className=' flex items-center justify-between'>
   <span  className="block text-xs text-gray-500">{moment(new Date()).format('MMM Do YY')} </span>
    <span className='text-[16px] font-bold underline-offset-2
    decoration-indigo-500 decoration-2'>{Number(card.price).toLocaleString('en-US',{style:'currency',currency:'USD'})}</span>
   </div>

    
      <h3 className="mt-0.5 truncate text-lg text-gray-900">{card.title}</h3>
   

    <p className="mt-2 line-clamp-4 md:line-clamp-3 text-sm/relaxed text-gray-500">
     {card.description}
    </p>
  </div>
</article>
    </Link>
  )
}

export default CardComponent