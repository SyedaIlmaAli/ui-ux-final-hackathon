"use client";

import YouMayLike from "./YouMayLike";
import ClubJoin from "@/components/ClubJoin";
import DifferentBrand from "@/components/DifferentBrand";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Loader from "@/components/Loader";

interface Image {
  asset: {
    url: string;
  };
}

interface Category {
  name: string;
  _id: string;
}

interface Dimensions {
  height: string;
  width: string;
  depth: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  quantity: number;
  tags: string[];
  description: string;
  features: string[];
  image: Image;
  category: Category;
  dimensions: Dimensions;
}

interface CartItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface WishlistItem {
  id: string;
  src: string;
  title: string;
  description: string;
  price: number;
}

const Product = ({ params }: { params: { id: string } }) => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { id } = params;

  console.log(product)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == $id]{
        _id,
        name,
        slug,
        price,
        quantity,
        tags,
        description,
        features,
        image {
          asset -> {
            url
          }
        },
        category -> {
          _id,
          name
        },
        dimensions {
          height,
          width,
          depth
        }
      }`;

      const data = await client.fetch(query, { id });
      setProduct(data[0]);
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (typeof window !== "undefined" && product) {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const productToAdd = {
        id: product._id,
        src: product.image.asset.url,
        alt: product.name,
        title: product.name,
        description: product.description,
        price: product.price,
        quantity: count,
      };

      const existingProduct = existingCart.find((item: CartItem) => item.id === productToAdd.id);
      if (existingProduct) {
        existingProduct.quantity += count;
      } else {
        existingCart.push(productToAdd);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert("Product added to cart");
    }
  };

  const addToWishlist = () => {
    if (typeof window !== "undefined" && product) {
      const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      const productToAdd = {
        id: product._id,
        src: product.image.asset.url,
        title: product.name,
        description: product.description,
        price: product.price,
      };

      const alreadyInWishlist = existingWishlist.some((item: WishlistItem) => item.id === productToAdd.id);
      if (alreadyInWishlist) {
        alert("Product is already in your wishlist!");
        return;
      }

      existingWishlist.push(productToAdd);
      localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
      alert("Product added to wishlist!");
    }
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const delCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (!isMounted || !product) {
    return (
      <h2 className="font-extrabold text-4xl text-center text-customPurple my-12">
        <Loader />
      </h2>
    );
  }

  return (
    <div>
      <div className="flex md:flex-row flex-col my-14 md:gap-16 gap-20 items-center">
        <div>
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={721}
            height={759}
            className="md:w-[721px] w-[390px] md:h-[759px] h-[380px]"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] md:leading-[44.28px] leading-[33.6px] md:text-[36px] text-myDarkBlue">
              {product.name}
            </h2>
            <h3 className="md:text-2xl text-xl text-[#12131A] md:leading-[32.4px] leading-[28px]">
              £{product.price}
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-base text-myDarkBlue">Description</h4>
            <p className="md:w-[498px] w-[342px] text-[#505977]">
              {product.description}
            </p>
            <ul className="list-disc pl-5 text-[#505977]">
              {product.features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-base text-myDarkBlue">Dimensions</h2>
            <div className="flex items-center text-myDarkBlue justify-between w-[241px]">
              <p className="text-sm">Height</p>
              <p className="text-sm">Width</p>
              <p className="text-sm">Depth</p>
            </div>
            <div className="flex items-center text-[#505977] justify-between w-[241px]">
              <p className="text-base">{product.dimensions?.height}</p>
              <p className="text-base">{product.dimensions?.width}</p>
              <p className="text-base">{product.dimensions?.depth}</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-24 mt-5 text-[#505977] justify-between w-full md:w-[241px]">
              <p className="text-base text-left text-myDarkBlue hidden md:block">Amount:</p>
              <p className="text-base text-left text-myDarkBlue md:hidden block">Quantity</p>
              <Button variant="secondary" className="bg-[#F9F9F9] flex gap-7">
                <p onClick={addCount}>+</p>
                <p>{count}</p>
                <p onClick={delCount}>-</p>
              </Button>
              <div>
                <Button onClick={addToWishlist} className="bg-myDarkBlue w-full rounded-none py-4 px-8 h-[56px] font-normal">
                Add to wishlist
                </Button>
              </div>
            </div>
                <Button onClick={addToCart} className="bg-myDarkBlue w-full rounded-none py-4 px-8 h-[56px] font-normal">
                  Add to cart
                </Button>
          </div>
        </div>
      </div>
      <YouMayLike />
      <DifferentBrand />
      <ClubJoin />
    </div>
  );
};

export default Product;
