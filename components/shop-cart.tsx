'use client';

import { type Product } from '@/types';
import { Button } from './ui/button';
import Image from 'next/image';
import useCart from '@/hooks/use-cart';
import { MouseEventHandler } from 'react';

interface ProductCard {
  data: Product;
}

const ShopCard: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div className='border-2 p-3 m-5 rounded-sm '>
      <div className='bg-gray-300 rounded-md mb-2'>
        <Image
          src={`/${data.image}.jpg`}
          alt={data.name}
          width={250}
          height={200}
          className='w-[250px] h-[200px] rounded object-cover'
        />
      </div>
      <h2 className='text-slate-400'>{data.name}</h2>
      <h2 className='font-semibold'>$ {data.price}</h2>
      <Button onClick={onAddToCart} className='mt-2'>
        Add To Cart
      </Button>
    </div>
  );
};

export default ShopCard;
