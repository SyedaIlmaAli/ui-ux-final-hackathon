import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";
import { Product } from "../../pages/[slug]/NewCeramicsComponent";

const NewCeramicsCard = ({ products }: { products: Product[] }) => {

  console.log(products)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-around mx-4">
      {products.map((item) => {
        // Check and access the slug from the Sanity reference, make sure it's a string
        const slug = item.slug?.current || item.slug;  // If slug is an object, access the 'current' field

        // Ensure 'slug' is a valid string before passing it to the link
        if (typeof slug !== 'string') {
          console.error('Invalid slug:', slug);
          return null;  // Skip this item if the slug is not a valid string
        }

        return (
          <div key={slug} className="">
            <Link href={`/product/${slug}`}>
              <ProductCard
                id={item.slug.current}  // Assuming 'id' is a reference to the 'slug'
                src={item.imageUrl}     // Assuming 'imageUrl' is the URL of the product image
                alt={item.name}         // Assuming 'name' is the product name
                price={item.price}
                title={item.name}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewCeramicsCard;
