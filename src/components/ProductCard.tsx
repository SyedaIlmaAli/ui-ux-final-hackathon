
import Image from 'next/image'
import Link from 'next/link'

interface ProductCard {
    src: string, alt: string, title?: string, price?: number, id: string
}

const ProductCard = ({src, alt, title, price, id}: ProductCard) => {


  return (
    <Link href={`/post/${id}`}>
    <div className='flex flex-col gap-2 cursor-pointer hover:scale-105 '>
      <div className=''>
        <Image src={src} alt={alt} height={375} width={305} className='md:h-[375px] h-[201px] hover:rounded-lg w-[163px] md:w-[305px]'/>
      </div>
      <div>
        <h6 className=' text-[13.72px]'>{title}</h6>
        <p className='text-[12.35px]'>£{price}</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
