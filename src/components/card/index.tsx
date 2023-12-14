import { IProductProps } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import moment from 'moment'

interface ICardProps {
    card:IProductProps
}

const CardComponent:React.FC<ICardProps> = ({card}) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <Image
    alt={card.title}
    src={card.category.image}
    width={250}
    height={200}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <span  className="block text-xs text-gray-500">{moment(card.creationAt).format('MMM Do YY')} </span>

    
      <h3 className="mt-0.5 text-lg text-gray-900">{card.title}</h3>
   

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {card.description}
    </p>
  </div>
</article>
  )
}

export default CardComponent