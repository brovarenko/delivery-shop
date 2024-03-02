import ShopList from '@/components/shop-list';

interface ShopPageProps {
  params: {
    shopId: string;
  };
}
export type Product = {
  id: number;
  name: string;
  price: number;
};

const ShopPage: React.FC<ShopPageProps> = async ({ params }) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Paracetamol',
      price: 40,
    },
    {
      id: 2,
      name: 'Paracetamol',
      price: 20,
    },
    {
      id: 3,
      name: 'Paracetamol',
      price: 10,
    },
  ];

  return (
    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
      <ShopList items={products} />
    </div>
  );
};

export default ShopPage;
