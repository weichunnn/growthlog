import Header from '@/components/Header';
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col w-full min-content-height px-16">
        <span className="max-w-md w-full text-center">
          Daily Planning and Journalling made simple.
        </span>
      </div>
    </>
  );
}
