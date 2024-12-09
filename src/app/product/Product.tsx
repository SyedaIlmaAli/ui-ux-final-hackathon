import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="flex md:flex-row flex-col my-14 md:gap-16 gap-20 items-center">
      <div>
        <Image
          src={"/ProductImg.png"}
          alt="Product"
          width={721}
          height={759}
          className="md:w-[721px] w-[390px] md:h-[759px] h-[380px]"
        />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <h2 className="text-[24px] md:leading-[44.28px] leading-[33.6px] md:text-[36px] text-myDarkBlue">
            The Dandy Chair
          </h2>
          <h3 className="md:text-2xl text-xl text-[#12131A] md:leading-[32.4px] leading-[28px]">
            £250
          </h3>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="text-base text-myDarkBlue">Description</h4>
          <p className="md:w-[498px] w-[342px] text-[#505977]">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul className="list-disc pl-5 text-[#505977]">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
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
            <p className="text-base">110cm</p>
            <p className="text-base">75cm</p>
            <p className="text-base">50cm</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-24 mt-5 text-[#505977] justify-between w-full md:w-[241px]">
            <p className="text-base text-left text-myDarkBlue hidden md:block">Amount:</p>
            <p className="text-base text-left text-myDarkBlue md:hidden block">Quantity</p>
            <Button variant="secondary" className="bg-[#F9F9F9] flex gap-7 ">
              <p>+</p>
              <p>1</p>
              <p>-</p>
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
};

export default Product;
