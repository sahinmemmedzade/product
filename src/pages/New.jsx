import React from 'react'
import Carousel from '../component/Carousel';
import ProductList from '../Crud';
import Card from '../component/Cards';
import Weekdeal from '../component/Weekdeal';
import Slide from '../component/slide';
const New = () => {
  return (
    <div><div>      <Carousel />
    </div>
    <Card></Card>

    <div>      <ProductList />
    </div>
    <div><Weekdeal /></div>
    <div><Slide /></div>
    
    </div>
  )
}

export default New