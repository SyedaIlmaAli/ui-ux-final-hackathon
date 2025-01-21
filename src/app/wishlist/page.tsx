"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WishlistItem } from "../post/[id]/page";
import Image from "next/image";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(storedWishlist);
    }
  }, []);

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert("Product removed from wishlist!");
  };

  return (
    <div className="px-4 md:px-12 lg:px-20 my-10">
      <h2 className="text-2xl md:text-3xl font-bold text-myDarkBlue mb-8">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-lg text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex flex-col items-center gap-4"
            >
              <Image src={item.src} alt={item.title} className="w-40 h-40 object-cover" width={160} height={160} />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-myDarkBlue font-bold">£{item.price}</p>
              <Button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-4 py-2"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
