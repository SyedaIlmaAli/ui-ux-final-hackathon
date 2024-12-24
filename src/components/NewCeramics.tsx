import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";

const NewCeramics = () => {
  const NewCeramicsData = [
    {
      id: "1",
      src: "/ui-chair.png",
      alt: "Chair",
      title: "The Dandy chair",
      price: 250,
    },
    {
      id: "1",
      src: "/Photo.png",
      alt: "Chair",
      title: "Rustic Vase Set",
      price: 155,
    },
    {
      id: "1",
      src: "/bottle.jpg",
      alt: "Chair",
      title: "The Silky Vase",
      price: 125,
    },
    {
      id: "1",
      src: "/ui-lamp.png",
      alt: "Lamp",
      title: "The Lucy Lamp",
      price: 399,
    }
  ];
  return (
    <div className="mx-8 my-8">
    <div className="flex flex-col gap-20">
      <h2 className="text-[20px] text-myDarkBlue md:text-[32px] ml-8 mt-20 -mb-10">New Ceramics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-around mx-4">
        {
            NewCeramicsData.map((item) => {
                return(
                    <ProductCard
                    id={item.id}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    price={item.price}
                    key={item.src}
                    />
                )
            })
        }
      </div>
      <div className="flex items-center justify-center">
      <Button variant="secondary" className="bg-[#F9F9F9] ">View Collection</Button>
      </div>
    </div>
    </div>
  );
};

export default NewCeramics;
