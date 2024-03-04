'use client';

import Image from 'next/image';

import useCart from '@/hooks/use-cart';
import { CartItem, Product } from '@/types';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  data: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const onIncrease = () => {
    cart.increaseQuantity(data.id);
  };

  const onDecrease = () => {
    cart.decreaseQuantity(data.id);
  };

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          src={`/${data.image}.jpg`}
          alt=''
          className='object-cover object-center'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <Button onClick={onRemove}>Remove</Button>
        </div>
        <div className='flex'>
          <div className='flex justify-between'>
            <p className='mx-2 text-lg font-semibold text-black'>{data.name}</p>
            <div className='flex items-center'>
              <Button className='mx-2' variant={'outline'} onClick={onDecrease}>
                -
              </Button>
              <span className='mx-2'>{data.quantity}</span>
              <Button className='mx-2' variant={'outline'} onClick={onIncrease}>
                +
              </Button>
            </div>
          </div>
        </div>
        <h2 className='m-2 font-semibold  text-lg'>$ {data.price}</h2>
      </div>
    </li>
  );
};

export default CartItem;
