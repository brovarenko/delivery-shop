import Sidebar from '@/components/sidebar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex m-5'>
      <Sidebar />
      {children}
    </div>
  );
}
