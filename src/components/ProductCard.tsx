import Image from 'next/image'
import React from 'react'

interface ProductCard {
    src: string, alt: string, title?: string, price?: number
}

const ProductCard = ({src, alt, title, price}: ProductCard) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Image src={src} alt={alt} height={375} width={305} className='h-[375px] w-[305px]'/>
      </div>
      <div>
        <h6 className=' text-[13.72px]'>{title}</h6>
        <p className='text-[12.35px]'>£{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
