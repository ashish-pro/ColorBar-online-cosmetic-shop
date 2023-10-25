import React from 'react'
import FeatureCard from './FeatureCard'
const data = [
    {
        img:"/i_cosmetic.png",
        title: "Naturally Derived",
        desc:"Natural and organic beauty product",
    },
    {
        img:"/i_del.png",
        title: "Free Shipping",
        desc:"Free shipping on all orders over $99",
    },
    {
        img:"/i_money.png",
        title: "Secure Payment",
        desc:"Fully protected when paying online",
    },
]

function Features() {
  return (
    <div className='container pt-16'>
        <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
            {data.map(item => <FeatureCard key={item.title} img={item.img} title = {item.title}
            desc = {item.desc} />)}
        </div>
    </div>
  )
}

export default Features