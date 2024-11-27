import React from 'react'
import Trend from '../components/Trend'
import Arrival from '../components/Arrival'
import Style from '../components/Style'
import FlashSale from '../components/FlashSale'
import Recommend from '../components/Recommend'

const Products = () => {
  return (
    <>
      <h2 className="text-2xl font-bold m-8">Trending Now</h2>
      <Trend />
      <h2 className="text-2xl font-bold m-8">New Arrival</h2>
      <Arrival />
      <Style />
      <h2 className="text-2xl font-bold m-8">Flash Sale</h2>
      <FlashSale />
      <h2 className="text-2xl font-bold m-8">Recommended For You</h2>
      <Recommend />
    </>
  )
}

export default Products