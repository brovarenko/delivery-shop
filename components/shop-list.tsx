'use client';
import { type Product } from '@/types';
import ShopCard from './shop-cart';
import { useState } from 'react';
import { Button } from './ui/button';

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className='space-y-4 w-full h-full'>
      <Button className='m-2' onClick={handleSort}>
        {`Sort by Price ${sortOrder === 'asc' ? '▲' : '▼'}`}
      </Button>
      <div className='flex flex-wrap'>
        {sortedItems.map((item) => (
          <ShopCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
