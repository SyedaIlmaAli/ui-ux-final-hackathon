"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; 
import ProductListingPage from "@/app/pages/[slug]/NewCeramicsComponent";
import { Product } from "./page";

const YouMayLike = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store fetched products

  useEffect(() => {
    const fetchProducts = async () => {
      // Sanity query to fetch only 4 products
      const query = `*[_type == "product"][0..3]{
        _id,
        title,
        price,
        slug,
        image {
          asset -> {
            url
          }
        }
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
        console.log(products) // Set fetched data into state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-8 ">
      <div className="flex flex-col gap-20">
        
        <div className=" items-center justify-around ">
          <ProductListingPage text="You may also like"/>
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;
