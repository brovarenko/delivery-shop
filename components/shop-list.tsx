import { Product } from '@/app/(main)/[shopId]/page';
import ShopCard from './shop-cart';

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className='space-y-4'>
      <div className='flex'>
        {items.map((item) => (
          <ShopCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
