"use client";

import { Button, } from "@/components/ui/button";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";

export default function Details({ product }: any) {
    const [quantity, setQuantity]: [quantity: any, setQuantity: any] =
        useState(1);
    return (
        <div className="flex flex-col max-w-[50rem] w-full justify-self-center gap-4">
            <div className="uppercase flex justify-between">
                <p>{product.category}</p>
            </div>
            <div className="flex flex-col gap-6 lg:mr-16">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold">{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <div className="flex gap-4 text-lg items-center">
                    <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
                    <p className="text-xl font-semibold p-2 text-white bg-yellow-500">{product.discountPercentage}% Discount</p>
                </div>
                <div className="flex gap-4 text-lg items-center">
                    <p className="text-2xl font-semibold">{product.rating} {"★"}</p>
                </div>
                <div className="flex gap-4 text-lg items-center">
                    <p className="text-lg font-semibold text-red-500"> only {product.stock} items left</p>
                </div>
                <div className="rounded-md flex outline outline-2 outline-[#eee] w-fit">
                    <button
                        disabled={quantity <= 1}
                        onClick={() => quantity > 1 && setQuantity((prev: any) => prev - 1)}
                        className="p-4 px-6 bg-white"
                    >
                        -
                    </button>
                    <div className="p-4 px-6 min-w-16 flex items-center justify-center bg-slate-200">
                        {quantity}
                    </div>
                    <button
                        onClick={() => setQuantity((prev: any) => prev + 1)}
                        className="p-4 px-6 bg-white"
                    >
                        +
                    </button>
                </div>
                <div className="flex w-full gap-4 my-4">
                    <Button>ADD TO CART</Button>
                </div>
                {product.reviews && product.reviews.length > 0 &&
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Reviews</h2>
                        {product.reviews.map((item: any) => (
                        <div key={item.email} className="flex flex-col gap-4 shadow p-4">
                            <div className="w-full gap-2 flex flex-col">
                                <h3 className="text-lg font-semibold">{item.reviewerName}</h3>
                                <p className="text-lg font-bold">Rating {item.rating}</p>
                                <p className="text-lg">Rating {item.comment}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                }
            </div>
        </div>
    );
}
