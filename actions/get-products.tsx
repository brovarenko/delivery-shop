import { db } from '@/lib/prismadb';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getProduct = async (id: string) => {
  const products = await db.item.findMany({
    where: {
      shopId: Number(id),
    },
  });

  return products;
};

export default getProduct;
