"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

export interface ResItem {
  name: string;
  slug: string;
}

const Navbar = () => {
  const [categories, setCategories] = useState<ResItem[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filteredCategories, setFilteredCategories] = useState<ResItem[]>([]); // State for filtered categories
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search box visibility

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `
        *[_type == "category"] {
          name,
          "slug": slug.current
        }
      `;
      const res = await client.fetch(query);
      setCategories(res);
      setFilteredCategories(res); // Initially, all categories are displayed
    };

    fetchCategories();
  }, []);

  // Update filtered categories when the search term changes
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm, categories]);

  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-between mx-8 my-6 items-center">
          {/* Search Icon */}
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsSearchOpen((prev) => !prev)} // Toggle search visibility
              className="cursor-pointer"
            >
              <rect
                width="16"
                height="16"
                fill="white"
                style={{ mixBlendMode: "multiply" }}
              />
              <path
                d="M14.5001 13.7929L10.7241 10.0169C11.6314 8.92758 12.0839 7.53038 11.9873 6.11596C11.8908 4.70153 11.2526 3.37879 10.2057 2.42288C9.15867 1.46698 7.78347 0.951515 6.36612 0.983723C4.94877 1.01593 3.5984 1.59333 2.59593 2.59581C1.59345 3.59828 1.01605 4.94865 0.983845 6.366C0.951637 7.78335 1.4671 9.15855 2.423 10.2055C3.37891 11.2525 4.70165 11.8907 6.11608 11.9872C7.5305 12.0838 8.9277 11.6313 10.017 10.7239L13.7931 14.5L14.5001 13.7929ZM2.00012 6.5C2.00012 5.60998 2.26404 4.73995 2.75851 3.99993C3.25297 3.25991 3.95578 2.68313 4.77804 2.34254C5.60031 2.00194 6.50511 1.91283 7.37802 2.08646C8.25094 2.2601 9.05276 2.68868 9.6821 3.31802C10.3114 3.94735 10.74 4.74918 10.9137 5.62209C11.0873 6.495 10.9982 7.3998 10.6576 8.22207C10.317 9.04434 8.7402 9.74714 9.00018 10.2416C8.26016 10.7361 7.39013 11 6.50012 11C5.30705 10.9987 4.16323 10.5241 3.3196 9.68052C2.47597 8.83689 2.00144 7.69306 2.00012 6.5Z"
                fill="#2A254B"
              />
            </svg>
          </div>
          <div>
            <Link href={"/"}>
              <h2 className="text-[24px] font-normal">Avion</h2>
            </Link>
          </div>
          <div className="flex gap-8 items-center">
            <Link href={"/wishlist"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#2A254B"
                  d="M8 14.667S2.667 10.333 2.667 6a3.333 3.333 0 016.666 0 3.333 3.333 0 016.667 0c0 4.333-5.333 8.667-5.333 8.667l-.667.667-.667-.667Z"
                />
              </svg>
            </Link>
            <Link href={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#2A254B"
                  d="M12 13.333a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666Zm-8 0a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666Zm1.707-1.333h7.293a.667.667 0 00.647-.5l1.707-6.667a.667.667 0 00-.647-.833H3.72L2.92.5a.667.667 0 00-.647-.5H.667A.667.667 0 100 1.333h1.707l1.6 6.333H2.667a.667.667 0 100 1.334h1.707a.667.667 0 00.647-.5L6.427 4H13.333l-1.333 5.333H6.747l-1.04 3.333Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      {/* Search Box */}
      {isSearchOpen && (
        <div className="mx-8 my-4">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ul className="mt-2 bg-white border border-gray-300 rounded-lg">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <li
                  key={category.slug}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link href={`/productListing/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
      <ul className="flex items-center justify-around mx-40 text-base">
        {filteredCategories.map((category) => (
          <li
          key={category.slug}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <Link href={`/productListing/${category.slug}`}>
            {category.name}
          </Link>
        </li>
        ))}
      </ul>
      </div>

      <div className="lg:hidden block my-6">
        <div className="flex items-center justify-around">
        <h2 className="text-[24px]">Avion</h2>
        <div className="flex items-center gap-3">
        

        <Sheet>
          <SheetTrigger asChild>
            <RxHamburgerMenu />
          </SheetTrigger>
          <SheetContent>
          <ul className="flex flex-col items-center gap-4 mt-5 font-mono">
          {filteredCategories.map((category) => (
          <li
          key={category.slug}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <Link href={`/productListing/${category.slug}`}>
            {category.name}
          </Link>
        </li>
        ))}
            <div className="flex gap-4 mt-4">
            <Link href={"/cart"}>
            <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsSearchOpen((prev) => !prev)}
        >
          <rect
            width="16"
            height="16"
            fill="white"
            style={{ mixBlendMode: "multiply" }}
          />
          <path
            d="M14.5001 13.7929L10.7241 10.0169C11.6314 8.92758 12.0839 7.53038 11.9873 6.11596C11.8908 4.70153 11.2526 3.37879 10.2057 2.42288C9.15867 1.46698 7.78347 0.951515 6.36612 0.983723C4.94877 1.01593 3.5984 1.59333 2.59593 2.59581C1.59345 3.59828 1.01605 4.94865 0.983845 6.366C0.951637 7.78335 1.4671 9.15855 2.423 10.2055C3.37891 11.2525 4.70165 11.8907 6.11608 11.9872C7.5305 12.0838 8.9277 11.6313 10.017 10.7239L13.7931 14.5L14.5001 13.7929ZM2.00012 6.5C2.00012 5.60998 2.26404 4.73995 2.75851 3.99993C3.25297 3.25991 3.95578 2.68313 4.77804 2.34254C5.60031 2.00194 6.50511 1.91283 7.37802 2.08646C8.25094 2.2601 9.05276 2.68868 9.6821 3.31802C10.3114 3.94735 10.74 4.74918 10.9137 5.62209C11.0873 6.495 10.9982 7.3998 10.6576 8.22207C10.317 9.04434 9.7402 9.74714 9.00018 10.2416C8.26016 10.7361 7.39013 11 6.50012 11C5.30705 10.9987 4.16323 10.5241 3.3196 9.68052C2.47597 8.83689 2.00144 7.69306 2.00012 6.5Z"
            fill="#2A254B"
          />
        </svg>
        </Link>

        {isSearchOpen && (
        <div className="mx-8 my-4">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ul className="mt-2 bg-white border border-gray-300 rounded-lg">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <li
                  key={category.slug}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Link href={`/productListing/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
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
                style={{ mixBlendMode: "multiply", cursor: "pointer" }}
              />
              <path
                d="M5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15Z"
                fill="#2A254B"
              />
              <path
                d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
                fill="#2A254B"
                />
              <path
                d="M14 3.50001H2.91L2.5 1.40001C2.47662 1.28537 2.41379 1.18256 2.32243 1.10947C2.23107 1.03639 2.11697 0.997651 2 1.00001H0V2.00001H1.59L3.5 11.6C3.52338 11.7146 3.58621 11.8175 3.67757 11.8905C3.76893 11.9636 3.88303 12.0024 4 12H13V11H4.41L4 9.00001H13C13.1156 9.00284 13.2286 8.96552 13.3197 8.89441C13.4109 8.8233 13.4746 8.7228 13.5 8.61001L14.5 4.11001C14.5168 4.03582 14.5164 3.95879 14.4989 3.88478C14.4814 3.81076 14.4472 3.74172 14.399 3.6829C14.3508 3.62407 14.2898 3.57703 14.2206 3.54534C14.1515 3.51364 14.076 3.49814 14 3.50001ZM12.6 8.00001H3.81L3.11 4.50001H13.375L12.6 8.00001Z"
                fill="#2A254B"
                />
            </svg>
            <Link href={"/wishlist"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#2A254B"
                  d="M8 14.667S2.667 10.333 2.667 6a3.333 3.333 0 016.666 0 3.333 3.333 0 016.667 0c0 4.333-5.333 8.667-5.333 8.667l-.667.667-.667-.667Z"
                />
              </svg>
            </Link>
          </div>
          </ul>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
