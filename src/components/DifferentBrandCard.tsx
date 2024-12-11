import Image from 'next/image'
import React from 'react'

const DifferentBrandCard = ({src, alt, title, description}:{src:string, alt: string, title:string, description: string}) => {
  return (
    <div className='flex flex-col gap-5 hover:cursor-pointer hover:scale-95'>
      <Image src={src} alt={alt} width={24} height={24}/>
      <h3 className='text-[20px] text-myDarkBlue'>{title}</h3>
      <p className='w-[270px] text-base text-myDarkBlue'>{description}</p>
    </div>
  )
}

export default DifferentBrandCard
