import Navbar from '@/components/navbar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-scren'>
      <Navbar />
      {children}
    </div>
  );
}
