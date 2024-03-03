'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <Link
          className={cn(pathname === '/' && 'group-hover:h-[20px]')}
          href='/'
        >
          Shops
        </Link>
        |
        <Link
          className={cn(pathname === '/cart' && 'text-blue-600')}
          href='/cart'
        >
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
