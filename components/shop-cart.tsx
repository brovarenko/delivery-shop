'use client';

import { Product } from '@/app/(main)/[shopId]/page';
import { Button } from './ui/button';
import pharmacy from '@/public/pharmacy.jpg';
import Image from 'next/image';

interface ProductCard {
  data: Product;
}

const ShopCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <div className='border-2 p-3 m-3 rounded-sm '>
      <div className='bg-gray-300 rounded-md mb-2'>
        <Image
          src={pharmacy}
          alt='coffee'
          className='w-[180px] h-[180px] rounded object-cover'
        />
      </div>
      <h2 className='text-slate-400'>{data.name}</h2>
      <h2 className='font-semibold text-green-400'>$ {data.price}</h2>
      <Button className='mt-2'>Add To Cart</Button>
    </div>
  );
};

export default ShopCard;
