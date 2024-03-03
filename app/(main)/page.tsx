import getShops from '@/actions/get-shops';
import { redirect } from 'next/navigation';

interface MainPageProps {
  params: {
    shopId: string;
  };
}

const MainPage: React.FC<MainPageProps> = async ({ params }) => {
  const shops = await getShops();
  return redirect(`/${shops[0].id}`);
};

export default MainPage;
