import { fetchSettings } from '@/app/utils/fetchers/settings';
import {
  Home03,
  Home04,
  LogOut01,
  LogOut02,
  WatchCircle,
} from '@untitled-ui/icons-react';
import Link from 'next/link';
import { fetchCompetition } from '@/app/utils/fetchers/competitions';

export default async function ContestEnd({
  params,
}: {
  params: { id: Competition['id'] };
}) {
  const competition = await fetchCompetition(params.id);

  return (
    <>
      <div className='bg-base-100 h-screen flex items-center justify-center'>
        <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
          <h1 className='text-3xl font-semibold text-center text-white-700 px-3'>
            {competition.name}
          </h1>
          <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700' />
          <div className='pb-3 text-xl text-center'>
            A verseny véget ért, köszönjük a részvételed!
          </div>
          {/* <div className='text-2xl text-center py-4'>
            {' '}
            Felhasznált idő: <b>4:32</b>
          </div> */}

          <div className='pt-2'>
            <div className='flex items-center justify-center'>
              <Link
                href='/'
                className='mt-3 mx-1 btn bg-yellow-950 hover:bg-yellow-900'
              >
                Főoldal
                <Home03 />
              </Link>
              {/* <Link
                href='/'
                className='mt-3 mx-1 btn bg-zinc-700 hover:bg-zinc-600'
              >
                Kijelentkezés
                <LogOut01 />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
