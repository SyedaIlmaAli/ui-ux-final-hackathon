"use client"

import React, { useEffect, useState } from 'react';
import ProductListingPage from './ProductListingPage';
import { ResItem } from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import Loader from '@/components/Loader';

const Page = ({ params }: { params: { slug: string } }) => {
  const [categories, setCategories] = useState<ResItem[]>([]);

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
    };

    fetchCategories();
  }, []);

  const { slug } = params;
  const post = categories.find((p) => p.slug === slug);

  return (
    <div className='my-8'>
      {post ? (
        <ProductListingPage />
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default Page;
