import getShops from '@/actions/get-shops';
import { Button } from './ui/button';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const Sidebar = async () => {
  const shops = await getShops();

  return (
    <div className='flex flex-col p-5 border-2 rounded-sm'>
      <div>Shops:</div>
      <div className='flex flex-col'>
        {shops.map((shop) => (
          <Link key={shop.id} href={`/${shop.id}`}>
            {shop.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
