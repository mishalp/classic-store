import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }: any) {
    return (
        <Link href={`/products/${product.id}`} className='flex flex-col items-center shadow-md rounded max-w-[300px]'>
            <Image src={product.thumbnail} width={200} height={200} alt={product.title} className='aspect-square object-cover object-center' />
            <div className="p-4 gap-2 flex flex-col w-full justify-evenly h-full">
                <h3 className=' md:text-xl font-medium'>{product.title}</h3>
                <p className='line-clamp-1 text-sm'>{product.description}</p>
                <div className="flex flex-wrap justify-between gap-2">
                    <h4 className='font-bold text-lg sm:text-xl'>{formatPrice(product.price)}</h4>
                    <p className='font-medium'>{product.rating}{"★"}</p>
                </div>
            </div>
        </Link>
    )
}
