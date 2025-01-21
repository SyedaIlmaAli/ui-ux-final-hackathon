"use client"


import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ProductList from "../../productListing/[slug]/ProductList";
import { client } from "@/sanity/lib/client";

interface Dimensions {
  height: string;
  width: string;
  depth: string;
}

export interface Product {
  name: string;
  category: string;
  slug: { current: string };
  imageUrl: string;
  price: number;
  quantity: number;
  tags: string[];
  description: string;
  features: string[];
  dimensions: Dimensions;
}

const NewCeramicsComponents = ({text}: {text: string}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"][1..4]{
            name,
            "category": category->name,
            slug,
            "imageUrl": image.asset->url,
            price,
            quantity,
            tags,
            description,
            features,
            dimensions {
              height,
              width,
              depth
            }
          }
        `;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (

      <div className="mx-8 my-8">
    <div className="flex flex-col gap-20">
      <h2 className="text-[20px] text-myDarkBlue md:text-[32px] ml-8 mt-20 ">{text}</h2>
      </div>
      
      {/* Show a loader or the ProductList component */}
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
        <ProductList products={products} />
      <div className="flex items-center justify-center">
            <Button variant="secondary" className="bg-[#F9F9F9] ">View Collection</Button>
            </div>
            </div>
      )}
    </div>
  );
};

export default NewCeramicsComponents;
