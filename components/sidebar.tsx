import Link from 'next/link';

const Sidebar = async () => {
  return (
    <div className='flex flex-col p-5 border-2'>
      <div>Shops:</div>
      <div className='flex flex-col'>
        <Link href='/shop1'>Drugs 24</Link>
        <Link href='/shop2'>Pharmacy</Link>
      </div>
    </div>
  );
};

export default Sidebar;
