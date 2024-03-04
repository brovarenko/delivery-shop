'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import { toast } from 'react-hot-toast';

interface CustomerInfo {
  email: string;
  name: string;
  phone: string;
  address: string;
}

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    email: '',
    name: '',
    phone: '',
    address: '',
  });
  const onChangeCustomerInfo = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);

  const onSubmit = async () => {
    try {
      console.log({ customerInfo, cartItems: items });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order`,
        { customerInfo, cartItems: items }
      );
      if (response.status === 200) {
        toast.success('Order created successfully');
      }
    } catch (error) {
      toast.error('Failed to submit order. Please try again.');
    }
  };

  return (
    <div className='mt-16 rounded-lg px-4 py-4 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <div>
        <label
          htmlFor='email'
          className='my-2 block text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='text'
          id='email'
          name='email'
          value={customerInfo.email}
          onChange={(e) => onChangeCustomerInfo('email', e.target.value)}
          className='mt-1 p-2 border w-full rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='name'
          className='my-2 block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={customerInfo.name}
          onChange={(e) => onChangeCustomerInfo('name', e.target.value)}
          className='mt-1 p-2 border w-full rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='phone'
          className='my-2 block text-sm font-medium text-gray-700'
        >
          Phone
        </label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={customerInfo.phone}
          onChange={(e) => onChangeCustomerInfo('phone', e.target.value)}
          className='mt-1 p-2 border w-full rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='address'
          className='my-2 block text-sm font-medium text-gray-700'
        >
          Address
        </label>
        <textarea
          id='address'
          name='address'
          value={customerInfo.address}
          onChange={(e) => onChangeCustomerInfo('address', e.target.value)}
          rows={4}
          className='mt-1 p-2 border w-full rounded-md'
        />
      </div>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between pt-4 text-lg'>
          <div className='font-medium text-gray-900'>Order total</div>
          <div>$ {totalPrice}</div>
        </div>
      </div>
      <Button
        onClick={onSubmit}
        disabled={
          items.length === 0 ||
          !customerInfo.email ||
          !customerInfo.name ||
          !customerInfo.phone ||
          !customerInfo.address
        }
        className='w-full mt-6'
      >
        Submit
      </Button>
    </div>
  );
};

export default Summary;
