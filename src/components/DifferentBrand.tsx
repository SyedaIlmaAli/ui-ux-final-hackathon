import React from "react";
import DifferentBrandCard from "./DifferentBrandCard";

const DifferentBrand = () => {
  const DifferentBrandData = [
    {
      src: "/Delivery.png",
      alt: "Delivery",
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard",
    },
    {
      src: "/Checkmark--outline.png",
      alt: "CheckMark",
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      src: "/Purchase.png",
      alt: "Purchase",
      title: "Unbeatable prices",
      description:
        "For our materials and quality you won’t find better prices anywhere",
    },
    {
      src: "/Sprout.png",
      alt: "Sprout",
      title: "Recycled packaging",
      description:
        "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];
  return (
    <div className="flex flex-col gap-10 my-12">
      <h2 className="text-[20px] md:text-[24px] text-center text-myDarkBlue">What makes our brand different</h2>
    <div className="flex flex-col md:flex-row text-myDarkBlue items-center justify-around mx-5">
      {DifferentBrandData.map((item) => {
        return (
          <DifferentBrandCard
          key={item.src}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
    </div>
  );
};

export default DifferentBrand;
