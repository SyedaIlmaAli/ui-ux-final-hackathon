import React from "react";
import Image from "next/image";

const CartProductCard = ({src, alt, title, price, description}: {src: string, alt: string, title: string, price: number, description: string}) => {
  return (
    <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
      <div>
        <Image src={src} alt={alt} width={109} height={134} />
      </div>
      <div className="flex-col flex gap-1">
        <h4 className="text-xl leading-7">{title}</h4>
        <p className="text-sm w-[179px]">{description}</p>
        <h6 className="text-base">£{price}</h6>
      </div>
      </div>
      <div>
        <p className="text-base">1</p>
      </div>
      <div>
        <p className="text-base">£{price}</p>
      </div>
    </div>
  );
};

export default CartProductCard;
