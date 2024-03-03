import getShops from '@/actions/get-shops';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarProps {
  shopId: number;
}

const Sidebar: React.FC<SidebarProps> = async ({ shopId }) => {
  const shops = await getShops();

  return (
    <div className='flex flex-col p-5 border-2 rounded-sm h-full'>
      <div className='text-lg flex justify-center'>Shops:</div>
      <div className='flex flex-col'>
        {shops.map((shop) => (
          <Link
            className={cn(
              'p-4 m-4 border-2 rounded-sm hover:cursor-pointer ',
              shopId == shop.id && 'border-green-600'
            )}
            key={shop.id}
            href={`/${shop.id}`}
          >
            {shop.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
