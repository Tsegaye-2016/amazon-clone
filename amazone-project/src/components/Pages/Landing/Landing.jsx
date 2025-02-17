import React from 'react'
import Category from '../../Category/Category'
import Product from '../../Product/Product'
import LayOut from '../../LayOut/LayOut'
import CarouselEffect from '../../Carousel/CarouselEffect'

function Landing() {
  return (
    <div>
      <LayOut>
            <CarouselEffect />
            <Category />
            <Product />
      </LayOut>
    </div>
  )
}

export default Landing;
