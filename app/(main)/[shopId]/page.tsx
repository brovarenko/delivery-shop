import getProduct from '@/actions/get-products';
import ShopList from '@/components/shop-list';

interface ShopPageProps {
  params: {
    shopId: string;
  };
}

const ShopPage: React.FC<ShopPageProps> = async ({ params }) => {
  const products = await getProduct(params.shopId);

  return (
    <div className='flex flex-col px-4 mx-5 border-2 rounded-sm w-full h-full'>
      <ShopList items={products} />
    </div>
  );
};

export default ShopPage;
