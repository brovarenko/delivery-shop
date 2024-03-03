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
    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
      <ShopList items={products} />
    </div>
  );
};

export default ShopPage;
