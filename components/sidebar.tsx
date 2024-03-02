'use client';
import { Button } from './ui/button';
import { useParams, useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col p-5 border-2 rounded-sm'>
      <div>Shops:</div>
      <div className='flex flex-col'>
        <Button
          className='m-3'
          onClick={() => {
            router.push(`/Drugs_24`);
          }}
        >
          Drugs 24
        </Button>
        <Button
          className='m-3'
          onClick={() => {
            router.push(`/Pharmacy`);
          }}
        >
          Pharmacy
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
