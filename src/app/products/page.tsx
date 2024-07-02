import ProductCard from '@/components/ProductCard'
import React from 'react'
import Controls from './controls'

export default async function page({ searchParams }: { searchParams: { page: number } }) {
    let skip = 0
    const limit = 24
    if (searchParams.page) {
        skip = searchParams.page * limit
    }
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,description,thumbnail,price,rating`)
    const result = await res.json()
    const { products } = result

    const maxPages = Math.ceil(result.total / limit )

    return (
        <div className='min-h-screen mb-8 mt-20 items-center flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>All products</h2>
            <div className='grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 px-2 md:px-4'>
                {products.map((item: any) => (
                    <ProductCard product={item} key={item.id} />
                ))}
            </div>
            <Controls skip={skip} page={searchParams.page} maxPages={maxPages} />
        </div>
    )
}
