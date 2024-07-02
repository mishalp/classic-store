"use client";


import Image from "next/image";
import React, { useState } from "react";

export default function Display({ product }: any) {
  const [selected, setSelected] = useState(0);


  return (
    <>
      <div className="flex flex-col gap-4 items-center lg:sticky top-10 lg:h-fit">
        <div className="relative">
          <Image
            src={product.images[selected]}
            width={400}
            height={300}
            alt=""
            className="aspect-square w-[15rem] sm:w-[25rem] object-contain"
          />
        </div>
        <div className="flex gap-4 max-w-[calc(100vw-2rem)] disableScrollBar overflow-x-scroll">
          {product.images.map((item: any, i: number) => (
            <div
              onMouseEnter={() => setSelected(i)}
              key={i}
              className={`${selected === i && "ring-1 ring-[#888]"
                } p-1 m-1 rounded-sm cursor-pointer`}
            >
              <Image
                src={item}
                width={100}
                height={300}
                alt=""
                className="aspect-square max-w-[5rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
