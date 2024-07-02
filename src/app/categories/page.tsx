import Link from 'next/link'
import React from 'react'

export default async function catogories() {
    const res = await fetch(`https://dummyjson.com/products/categories`)
    const categories = await res.json()
  return (
    <div className='min-h-screen mb-8 mt-20 items-center flex flex-col gap-4'>
    <h2 className='text-xl font-semibold'>All Categories</h2>
    <div className=' grid grid-cols-2 md:grid-cols-3  w-full px-4 gap-4'>
        {categories.map((item:any)=>(
            <Link href={`/categories/${item.slug}`} key={item.slug} className="p-4 rounded flex text-center bg-[#1A1B23] items-center justify-center shadow">
                <p className='text-white'>{item.name}</p>
            </Link>
        ))}
    </div>
</div>
  )
}
