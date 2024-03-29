'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const hasNumber = /\d+/.test(pathname);
  return (
    <div className='text-lg border-b'>
      <div className='flex h-16 items-center px-4'>
        <Link
          className={cn(
            'p-3',
            hasNumber && 'text-zink-600 underline font-medium'
          )}
          href='/'
        >
          Shops
        </Link>
        |
        <Link
          className={cn(
            'p-3',
            pathname === '/cart' && 'text-zink-600 underline font-medium'
          )}
          href='/cart'
        >
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
