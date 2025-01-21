"use client";

import React, { useState, useEffect } from "react";
import CartProductCard from "./CartProductCard";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import Link from "next/link";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState<{
    id: string;
    src: string;
    alt: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
  }[] | null>(null); // Initialize as null

  // Load cart data from localStorage once client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartProducts(JSON.parse(storedCart));
      } else {
        setCartProducts([]); // Ensure it's initialized as an empty array if no cart data
      }
    }
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (cartProducts !== null) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  const removeFromCart = (id: string) => {
    const updatedCart = cartProducts?.filter((item) => item.id !== id);
    setCartProducts(updatedCart || []);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartProducts?.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartProducts(updatedCart || []);
  };

  const subTotal = cartProducts?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  if (cartProducts === null) {
    return (
      <h2 className="font-extrabold text-4xl text-center text-customPurple my-12"><Loader/></h2>
    );
  }

  return (
    <div className="bg-[#F9F9F9]">
      <div className="mx-8 my-10 ml-8">
        <h2 className="text-[20px] text-myDarkBlue md:text-[32px] mt-20">Your shopping cart</h2>
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
        {cartProducts.length > 0 ? (
          cartProducts.map((item) => (
            <CartProductCard
              key={item.id}
              src={item.src}
              alt={item.alt}
              name={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => removeFromCart(item.id)}
              onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
            />
          ))
        ) : (
          <p>No products in cart</p>
        )}
      </div>

      <div className="flex items-end justify-end gap-3 my-5 flex-col mx-16">
        <div className="flex gap-4">
          <h4 className="text-[#4E4D93] text-xl">Sub Total</h4>
          <p className="text-myDarkBlue text-2xl">£{subTotal}</p>
        </div>
        <p className="text-[#4E4D93] text-sm">Taxes and shipping are calculated at checkout</p>
        <Link href={"/checkout"}>
        <Button className="w-[172px] h-[56px] rounded-none text-white bg-myDarkBlue">
          Go to checkout
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
