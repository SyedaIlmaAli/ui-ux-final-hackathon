"use client"

import React from "react";
import Image from "next/image";

const CartProductCard = ({
  src,
  alt,
  name,
  price,
  description,
  quantity,
  onRemove,
  onUpdateQuantity,
}: {
  src: string;
  alt: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}) => {
  return (
    <div className="flex-col flex md:flex-row items-center justify-between gap-5">
      <div className="flex items-center gap-5">
        <div>
          <Image src={src} alt={alt} width={109} height={134} />
        </div>
        <div className="flex-col flex gap-1">
          <h4 className="text-xl leading-7">{name}</h4>
          <p className="text-sm w-[179px]">{description}</p>
          <h6 className="text-base">£{price}</h6>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => onUpdateQuantity(quantity - 1)} className="p-1 border rounded">-</button>
        <p className="text-base">{quantity}</p>
        <button onClick={() => onUpdateQuantity(quantity + 1)} className="p-1 border rounded">+</button>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-base">£{price * quantity}</p>
        <button onClick={onRemove} className="p-1 border rounded bg-red-500 text-white">Remove</button>
      </div>
    </div>
  );
};

export default CartProductCard;
