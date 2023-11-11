import { Home02, LogIn02 } from '@untitled-ui/icons-react';
import { fetchSettings } from '@/app/utils/fetchers/settings';

export default async function Home() {
  const settings = await fetchSettings();

  return (
    <>
      <div className='mx-auto bg-base-100'>
        <div className='items-center relative flex flex-col justify-center h-screen overflow-hidden'>
          <h1 className='text-6xl font-bold pb-12 pt-10'>{settings.name}</h1>
          <p className='text-3xl'>{settings.description}</p>
          <div className='mt-10 mb-20'>
            <a
              className='btn bg-blue-600 hover:bg-blue-800 pl-10 pr-10 mr-5'
              href='./login'  
            >
              <LogIn02 />
              Bejelentkezés
            </a>
            <a className='btn bg-neutral-700 hover:bg-neutral-800 ml-5 pl-4 pr-4 text-white'>
              <Home02 /> Bemutatkozó oldal
            </a>
          </div>
        </div>
        <p className='text-2xl pb-20'>((Weboldal rövid leírása))</p>
      </div>
    </>
  );
}
