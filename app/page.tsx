import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-94px)] py-2 bg-gray-50">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
          Welcome to <span className="text-custom-dark-green">Volunteer Yatra</span>
        </h1>

        <p className="mt-3 text-xl sm:text-2xl text-gray-700">
          Discover meaningful volunteer opportunities around the world.
        </p>

        <div className="mt-6">
          <Link href="/opportunities" className='inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#114047] bg-[#F3E494] hover:bg-[#F3E450]'>

              Explore Opportunities
          </Link>
        </div>
      </main>
    </div>
  );
}
