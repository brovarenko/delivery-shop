import Link from 'next/link';

const Navbar = async () => {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <Link href='/'>Shops</Link>
        <Link href='/cart'>Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
