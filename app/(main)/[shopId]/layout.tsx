import Sidebar from '@/components/sidebar';

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { shopId: number };
}) {
  return (
    <div className='flex m-5 h-full'>
      <Sidebar shopId={params.shopId} />
      {children}
    </div>
  );
}
