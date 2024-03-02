interface ShopPageProps {
  params: {
    shopId: string;
  };
}

const ShopPage: React.FC<ShopPageProps> = async ({ params }) => {
  return <div className='flex-col'>{params.shopId}</div>;
};

export default ShopPage;
