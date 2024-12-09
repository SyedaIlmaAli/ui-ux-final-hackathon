import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ProductList from "./ProductList";

const ProductListingPage = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/table-chair.jpg"}
          alt="background"
          height={290}
          width={1440}
          className="w-[1440px] h-[290px] object-cover"
        />
        <h2 className="absolute top20 text-4xl text-white left-20 top-[203px]">
          All Products
        </h2>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between py-7 mx-16 items-center">
          <div className="flex items-center gap-10">
            <p className="flex gap-2 items-center text-base">
              Category{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
            </p>
            <p className="flex gap-2 items-center text-base">
              Product type{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
            </p>
            <p className="flex gap-2 items-center text-base">
              Price{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
            </p>
            <p className="flex gap-2 items-center text-base">
              Brand{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
            </p>
          </div>
          <div className="flex gap-10 items-center">
            <p className="text-sm">Sorting by:</p>
            <p className="flex gap-2 text-base">
              Date added
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center justify-center gap-2 py-7">
          <Button variant="secondary" className="bg-[#F9F9F9] flex gap-2 items-center py-4 pr-6">
            View Collection
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
          </Button>
          <Button variant="secondary" className="bg-[#F9F9F9] flex gap-2 items-center py-4 pl-8">
            View Collection
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  style={{ mixBlendMode: "multiply" }}
                />
                <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
              </svg>
          </Button>
        </div>
      </div>
        <ProductList/>
    </div>
  );
};

export default ProductListingPage;
