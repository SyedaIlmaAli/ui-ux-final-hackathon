import ProductCard from "@/components/ProductCard";
import React from "react";

const ProductList = () => {
  const ProductListData = [
    {
      src: "/ui-chair.png",
      alt: "Chair",
      title: "The Dandy chair",
      price: 250,
    },
    {
      src: "/Photo.png",
      alt: "Chair",
      title: "Rustic Vase Set",
      price: 155,
    },
    {
      src: "/bottle.jpg",
      alt: "Chair",
      title: "The Silky Vase",
      price: 125,
    },
    {
      src: "/ui-lamp.png",
      alt: "Lamp",
      title: "The Lucy Lamp",
      price: 399,
    },
    {
        src: "/roof-lamp.png",
        alt: "Chair",
        title: "The Dandy chair",
        price: 250,
      },
      {
        src: "/Vase.png",
        alt: "Chair",
        title: "Rustic Vase Set",
        price: 155,
      },
      {
        src: "/ui-stool.png",
        alt: "Chair",
        title: "The Silky Vase",
        price: 125,
      },
      {
        src: "/3Chairs.png",
        alt: "Chair",
        title: "The Lucy Lamp",
        price: 399,
      },
      {
        src: "/ui-chair.png",
        alt: "Chair",
        title: "The Dandy chair",
        price: 250,
      },
      {
        src: "/Photo.png",
        alt: "Chair",
        title: "Rustic Vase Set",
        price: 155,
      },
      {
        src: "/bottle.jpg",
        alt: "Chair",
        title: "The Silky Vase",
        price: 125,
      },
      {
        src: "/ui-lamp.png",
        alt: "Lamp",
        title: "The Lucy Lamp",
        price: 399,
      },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mx-8 space-y-2 py-12 space-x-2">
      {ProductListData.map((item) => {
        return (
          <ProductCard
            src={item.src}
            alt={item.alt}
            price={item.price}
            title={item.title}
            key={item.src}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
