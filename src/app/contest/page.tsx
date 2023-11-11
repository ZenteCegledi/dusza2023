import { fetchSettings } from '@/app/utils/fetchers/settings';
import { Clock, ClockStopwatch, List } from '@untitled-ui/icons-react';

export default async function Contest() {
  const settings = await fetchSettings();

  return (
    <>
    <div className='bg-base-100 h-screen flex items-center justify-center'>
      <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 px-3'>
          ((versenyNeve))
        </h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />
        <div className='pb-3'>Írd le jó betűsorrendben a negyedik szót!</div>
        <div className='text-xl p-2'>Jó szavak: alma, körte, szilva</div>
        <div className='text-xl p-2 pb-6'>Negyedik szó: <b>rackba</b></div>
        <form className='space-y-4'>
          <div>

            <input
              type='text'
              placeholder='Negyedik szó helyes betűsorrendben'
              className='w-full input input-bordered'
              required
            />
          </div>

          <div className='pt-2'>
            <button
              className='btn w-full bg-green-900 hover:bg-green-700'
              type='submit'
            >
              Következő feladat (utolsó oldalon BEKÜLDÉS)!!!
            </button>
            <div className='flex items-center justify-center'>
            <div className='mt-3 mx-1 btn bg-yellow-950 hover:bg-yellow-900'><List/> Jelenlegi feladat: 1/3</div>
            <div className='mt-3 mx-1 btn bg-zinc-700 hover:bg-zinc-600'><ClockStopwatch/>Idő: 2:31</div>
          </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
