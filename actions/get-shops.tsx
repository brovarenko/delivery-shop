import { db } from '@/lib/prismadb';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getShops = async () => {
  const shops = await db.shop.findMany({});

  return shops;
};

export default getShops;
