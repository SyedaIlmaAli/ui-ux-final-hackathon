import Image from 'next/image'
import ProductCard from './ProductCard'

const OurPopularProducts = () => {
  return (
    <div className="mx-8 my-8">
    <div className="flex flex-col gap-20">
      <h2 className="text-[20px] md:text-[32px] ml-8 mt-20 -mb-10">Our popular products</h2>
      <div className='flex flex-col md:flex-row gap-5 mx-8'>
      <div className='flex flex-col gap-2 '>
      <div>
        <Image src={"/Large.png"} alt="Sofa" height={375} width={630} className='h-[375px] w-[630px] '/>
      </div> 
      <div>
        <h6 className=' text-[13.72px]'>The Poplar suede sofa</h6>
        <p className='text-[12.35px]'>£980</p>
      </div>
    </div> 
    <ProductCard
    src='/ui-chair.png'
    alt='chair'
    title='The Dandy chair'
    price={250}
    />
    <ProductCard
    src='/Chair2.png'
    alt='chair'
    title='The Dandy chair'
    price={250}
    />
      </div>
      </div>
      </div>
  )
}

export default OurPopularProducts
