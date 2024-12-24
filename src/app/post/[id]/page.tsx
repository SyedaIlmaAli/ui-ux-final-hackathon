"use client";

import YouMayLike from "./YouMayLike";
import ClubJoin from "@/components/ClubJoin";
import DifferentBrand from "@/components/DifferentBrand";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const ProductData = [
  {
    id: "1",
    title: "The Dandy Chair",
    price: 250,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quality1: "Premium material",
    quality2: "Handmade upholstery",
    quality3: "Quality timeless classic",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
    src: "/ProductImg.png",
    alt: "Product",
  },
];

const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = ProductData.find((p) => p.id === id);
  if (!post) {
    return (
      <h2 className="font-extrabold text-4xl text-center text-customPurple my-12">
        Page not found
      </h2>
    );
  }

  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1); // Update the state
  };

  const delCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {ProductData.map((item) => {
        return (
          <div key={item.id} className="flex md:flex-row flex-col my-14 md:gap-16 gap-20 items-center">
            <div>
              <Image
                src={item.src}
                alt={item.alt}
                width={721}
                height={759}
                className="md:w-[721px] w-[390px] md:h-[759px] h-[380px]"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3">
                <h2 className="text-[24px] md:leading-[44.28px] leading-[33.6px] md:text-[36px] text-myDarkBlue">
                  {item.title}
                </h2>
                <h3 className="md:text-2xl text-xl text-[#12131A] md:leading-[32.4px] leading-[28px]">
                  £{item.price}
                </h3>
              </div>
              <div className="flex flex-col gap-8">
                <h4 className="text-base text-myDarkBlue">Description</h4>
                <p className="md:w-[498px] w-[342px] text-[#505977]">
                  {item.description}
                </p>
                <ul className="list-disc pl-5 text-[#505977]">
                  <li>{item.quality1}</li>
                  <li>{item.quality2}</li>
                  <li>{item.quality3}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-base text-myDarkBlue">Dimensions</h2>
                <div className="flex items-center text-myDarkBlue justify-between w-[241px]">
                  <p className="text-sm">Height</p>
                  <p className="text-sm">Weight</p>
                  <p className="text-sm">Depth</p>
                </div>
                <div className="flex items-center text-[#505977] justify-between w-[241px]">
                  <p className="text-base">{item.height}</p>
                  <p className="text-base">{item.width}</p>
                  <p className="text-base">{item.depth}</p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-24 mt-5 text-[#505977] justify-between w-full md:w-[241px]">
                  <p className="text-base text-left text-myDarkBlue hidden md:block">
                    Amount:
                  </p>
                  <p className="text-base text-left text-myDarkBlue md:hidden block">
                    Quantity
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-[#F9F9F9] flex gap-7 "
                  >
                    <p onClick={addCount}>+</p>
                    <p>{count}</p>
                    <p onClick={delCount}>-</p>
                  </Button>
                  <div>
                    <Button className="bg-myDarkBlue w-full rounded-none py-4 px-8 h-[56px] font-normal">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <YouMayLike/>
      <DifferentBrand/>
      <ClubJoin/>
    </div>
  );
};

export default Product;
