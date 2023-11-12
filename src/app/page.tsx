import { Award05, Home02, Laptop01, LogIn02 } from '@untitled-ui/icons-react';
import { fetchIntro } from './utils/fetchers/intro';
import { fetchSettings } from './utils/fetchers/settings';
import Link from 'next/link';

export default async function Home() {
  const settings = await fetchSettings();

  return (
    <>
      <div className='mx-auto bg-base-100'>
        <div className='items-center relative flex flex-col justify-center h-screen overflow-hidden'>
          <h1 className='text-6xl font-bold pb-12 pt-10'>{settings.name}</h1>
          <p className='text-3xl'>{settings.slogan}</p>
          <div className='mt-10 mb-20'>
            <div className='flex flex-col justify-center gap-4'>
              <Link
                className='btn bg-blue-600 hover:bg-blue-800 text-white'
                href='/login'
              >
                <LogIn02 />
                Bejelentkezés
              </Link>
              <Link
                href='/introduction'
                className='btn bg-neutral-700 hover:bg-neutral-800 text-white'
              >
                <Home02 />
                Bemutatkozó oldal
              </Link>
              <Link
                href='/introduction-programmers'
                className='btn bg-yellow-700 hover:bg-yellow-800 text-white'
              >
                <Laptop01 />
                Programozók bemutatkozása
              </Link>
              <Link href='/contests' className='btn bg-green-800 hover:bg-green-700'>
                <Award05 />
                Versenyek
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
