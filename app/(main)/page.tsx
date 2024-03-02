import { redirect } from 'next/navigation';

interface MainPageProps {
  params: {
    shopId: string;
  };
}

const MainPage: React.FC<MainPageProps> = async ({ params }) => {
  return redirect(`/shop1`);
};

export default MainPage;
