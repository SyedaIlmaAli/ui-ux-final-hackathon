import React from "react";
import CartProductCard from "./CartProductCard";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const cartProductData = [
    {
      src: "/Bottle1.png",
      alt: "bottle",
      title: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
    },
    {
      src: "/Plant.png",
      alt: "plant",
      title: "Basic white vase",
      description: "Beautiful and simple this isone for the classics.",
      price: 85,
    },
  ];
  return (
    <div className="bg-[#F9F9F9]">
      <div className="mx-8 my-10  ml-8">
        <h2 className="text-[20px] text-myDarkBlue md:text-[32px] mt-20 ">
          Your shopping cart
        </h2>
        <div className="hidden md:block">
          <div className="flex items-center mt-10 justify-between">
            <div>
              <p>Product</p>
            </div>
            <div className="lg:ml-48">
              <p>Quantity</p>
            </div>
            <div>
              <p>Total</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b-2 border-t-2 py-14 mx-8 gap-8">
        {cartProductData.map((item) => {
          return (
            <CartProductCard
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
              key={item.src}
            />
          );
        })}
      </div>
      <div className="flex items-end justify-end gap-3 my-5 flex-col mx-16">
        <div className="flex gap-4">
          <h4 className="text-[#4E4D93] text-xl">Sub Total</h4>
          <p className="text-myDarkBlue text-2xl">£210</p>
        </div>
        <p className="text-[#4E4D93] text-sm">Taxes and shipping are calculated at checkout</p>
        <Button className="w-[172px] h-[56px] rounded-none text-white bg-myDarkBlue">Go to checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
