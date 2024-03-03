import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getProduct = async (id: string): Promise<Product[]> => {
  const res = await fetch(`http://localhost:3000/api/${id}/products/`);

  return res.json();
};

export default getProduct;
