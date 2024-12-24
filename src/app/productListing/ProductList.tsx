import ProductCard from "@/components/ProductCard";
import React from "react";

const ProductList = () => {
  const ProductListData = [
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
    },
    {
      id: "1",
        src: "/roof-lamp.png",
        alt: "Chair",
        title: "The Dandy chair",
        price: 250,
      },
      {
        id: "1",
        src: "/Vase.png",
        alt: "Chair",
        title: "Rustic Vase Set",
        price: 155,
      },
      {
        id: "1",
        src: "/ui-stool.png",
        alt: "Chair",
        title: "The Silky Vase",
        price: 125,
      },
      {
        id: "1",
        src: "/3Chairs.png",
        alt: "Chair",
        title: "The Lucy Lamp",
        price: 399,
      },
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
      },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mx-8 space-y-2 py-12 space-x-2">
      {ProductListData.map((item) => {
        return (
          <ProductCard
          id= {item.id}
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
