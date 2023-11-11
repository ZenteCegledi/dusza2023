import { fetchSettings } from '@/app/utils/settings';

export default async function Login() {
  const settings = await fetchSettings();

  return (
    <>
      <div className='h-screen bg-base-100'>
        <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
          <div className='w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg'>
            <h1 className='text-3xl font-semibold text-center text-white-700'>
              {settings.name}
            </h1>
            <form className='space-y-4'>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Felhasználónév</span>
                </label>
                <input
                  type='text'
                  placeholder='Felhasználónév'
                  className='w-full input input-bordered'
                />
              </div>
              <div className='pb-5'>
                <label className='label'>
                  <span className='text-base label-text'>Jelszó</span>
                </label>
                <input
                  type='password'
                  placeholder='Jelszó'
                  className='w-full input input-bordered'
                />
              </div>
              <div>
                <button className='btn w-full bg-blue-900 hover:bg-blue-700 '>
                  Bejelentkezés
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
