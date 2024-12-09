import React from 'react'
import Product from './Product'
import YouMayLike from './YouMayLike'
import DifferentBrand from '@/components/DifferentBrand'
import ClubJoin from '@/components/ClubJoin'

const page = () => {
  return (
    <div>
      <Product/>
      <YouMayLike/>
      <DifferentBrand/>
      <ClubJoin/>
    </div>
  )
}

export default page
