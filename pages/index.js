import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col w-full min-content-height px-16">
        <span className="max-w-md w-full text-center">
          Daily Planning and Journalling made simple.
        </span>
        <span>{user?.email}</span>
      </div>
    </>
  );
}
