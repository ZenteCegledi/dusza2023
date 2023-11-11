import Link from 'next/link';

export default function IntroductionSettings() {
  return (
    <>
      <div className='w-full p-6 m-auto bg-black rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 p-3'>
          Bemutatkozó oldal szerkesztése
        </h1>
        <form className='space-y-4'>
          <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <div>
            <label className='label'>
              <span className='text-base label-text'>Oldal neve</span>
            </label>
            <input
              type='text'
              placeholder='Bemutatkozás'
              className='w-full input input-bordered'
              required
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Oldal tartalma</span>
            </label>
            <textarea
              className='textarea textarea-bordered w-full h-40'
              placeholder='Csapattagok és leírások, VALAMILYEN RICH TEXT EDITOR KELL!'
              required
            ></textarea>
          </div>

          <div className='pt-2'>
            <button className='btn w-full bg-blue-900 hover:bg-blue-700  '>
              Beállítások mentése
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
