import React from 'react'
import ProductCard from './ProductCard'

export default async function HomeProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=12&select=title,description,thumbnail,price,rating')
    const {products} = await res.json()
    
  return (
    <div className="flex flex-col gap-8 w-full px-2 md:px-4">
        <h2 className='font-semibold text-2xl'>Featured Products</h2>
        <div className='grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 px-2 md:px-4'>
        {products.map((item:any)=>(
            <ProductCard product={item} key={item.id}/>
        ))}
    </div>
    </div>
  )
}
