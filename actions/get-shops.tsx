import { type Shop } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getShops = async (): Promise<Shop[]> => {
  const res = await fetch(`${URL}/api/shops/`);
  return res.json();
};

export default getShops;
