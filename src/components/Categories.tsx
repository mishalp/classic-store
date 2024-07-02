import Link from 'next/link';
import React from 'react'

export default async function Categories() {

    const resp = await fetch('https://dummyjson.com/products/categories')
    if (!resp.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    const categories = await resp.json()

  return (
   <div className="flex flex-col gap-4 w-full px-4 my-8">
    <h2 className='font-semibold text-2xl'>Categories</h2>
     <div className=' grid grid-cols-2 md:grid-cols-3  w-full px-4 gap-4'>
        {categories.filter((_:any, i:number)=> i < 6).map((item:any)=>(
            <Link href={`/categories/${item.slug}`} key={item.slug} className="p-4 rounded flex text-center bg-[#1A1B23] items-center justify-center shadow">
                <p className='text-white'>{item.name}</p>
            </Link>
        ))}
    </div>
   </div>
  )
}
