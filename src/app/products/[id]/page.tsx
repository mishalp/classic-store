import React from 'react'
import Display from './display'
import Details from './details'

export default async function page({ params }: { params: { id: string } }) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const product = await res.json()
    console.log(product);

    return (
        <div className='min-h-screen mb-8 mt-20 items-center flex flex-col gap-4'>
            <div className="grid lg:grid-cols-2 gap-2  min-h-[80vh] p-4">
                <Display product={product} />
                <Details product={product} />
            </div>
        </div>
    )
}
