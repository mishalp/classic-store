import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }: any) {
    return (
        <Link href={`/products/${product.id}`} className='flex flex-col items-center shadow-md rounded max-w-[300px]'>
            <Image 
            placeholder='data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=='
            src={product.thumbnail} width={200} height={200} alt={product.title} className='aspect-square object-cover object-center' />
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
