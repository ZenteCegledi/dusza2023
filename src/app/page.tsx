import { Home02, LogIn02 } from '@untitled-ui/icons-react';
import { fetchIntro } from './utils/fetchers/intro';
import Link from 'next/link';

export default async function Home() {
  const intro = await fetchIntro();

  return (
    <>
      <div className='mx-auto bg-base-100'>
        <div className='items-center relative flex flex-col justify-center h-screen overflow-hidden'>
          <h1 className='text-6xl font-bold pb-12 pt-10'>{intro.title}</h1>
          <p className='text-3xl'>{intro.description}</p>
          <div className='mt-10 mb-20'>
            <Link
              className='btn bg-blue-600 hover:bg-blue-800 pl-10 pr-10 mr-5 text-white'
              href='./login'>
              <LogIn02 />
              Bejelentkezés
            </Link>
            <Link href="./introduction" className='btn bg-neutral-700 hover:bg-neutral-800 ml-5 pl-4 pr-4 text-white'>
              <Home02 />
              Bemutatkozó oldal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
