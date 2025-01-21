import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
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
  dateAdded?: string;  // Add this line to match the type
}

const ProductListingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("dateAdded");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"] {
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
            },
            dateAdded
          }
        `;
        const data = await client.fetch(query);

        // Extract unique categories
        const uniqueCategories = Array.from(new Set(data.map((product: Product) => product.category))) as string[];
        setCategories(uniqueCategories);

        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products based on user selection
  useEffect(() => {
    let filtered = products;
  
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }
  
    // Sort products
    if (sortOption === "dateAdded") {
      filtered.sort((a, b) => {
        // Fallback to current date if dateAdded is undefined
        const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : new Date().getTime();
        const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : new Date().getTime();
        return dateB - dateA;
      });
    } else if (sortOption === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    setFilteredProducts(filtered);
  }, [selectedCategory, sortOption, products]);
  

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
        <h2 className="absolute text-4xl text-white left-20 top-[203px]">
          All Products
        </h2>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between py-7 mx-16 items-center">
          <div className="flex items-center gap-10">
            {/* Category Filter */}
            <div>
              <p className="flex gap-2 cursor-pointer items-center text-base">
                Category
                <svg width="16" height="16" fill="#2A254B" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6L8 11L4 6H12Z" />
                </svg>
              </p>
              <select
                className="border border-gray-300 rounded px-2 py-1 mt-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Sort by Options */}
          <div className="flex gap-10 items-center">
            <p className="text-sm cursor-pointer">Sorting by:</p>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="dateAdded">Date Added</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center justify-center gap-2 py-7">
          <Button variant="secondary" className="bg-[#F9F9F9] flex gap-2 items-center py-4 pr-6">
            View Collection
            <svg width="16" height="16" fill="#2A254B" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6L8 11L4 6H12Z" />
            </svg>
          </Button>
        </div>
      </div>
      {/* Show loader or filtered products */}
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default ProductListingPage;
