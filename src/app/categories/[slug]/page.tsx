import ProductCard from '@/components/ProductCard'
import React from 'react'
import Controls from './controlls'

export default async function page({params, searchParams}: {params: {slug: string}, searchParams:any}) {
    let skip = 0
    const limit = 24
    if (searchParams.page) {
        skip = searchParams.page * limit
    }
    const res = await fetch(`https://dummyjson.com/products/category/${params.slug}?limit=${limit}&skip=${skip}&select=title,description,thumbnail,price,rating`)
    const result = await res.json()
    console.log(result);
    
    const { products } = result

    const maxPages = Math.ceil(result.total / result.limit )
  return (
    <div className='min-h-screen mb-8 mt-20 items-center flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>All {params.slug} products</h2>
            <div className='grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 px-2 md:px-4'>
                {products.map((item: any) => (
                    <ProductCard product={item} key={item.id} />
                ))}
            </div>
            <Controls slug={params.slug} skip={skip} page={searchParams.page} maxPages={maxPages} />
        </div>
  )
}
