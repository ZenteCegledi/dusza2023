'use client';

export default function AddContest() {

  return (
    <>
      <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 pb-5 pt-4 px-8'>
          Verseny létrehozása
        </h1>
        <form className='space-y-4'>
          <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <div>
            <label className='label'>
              <span className='text-base label-text'>Név</span>
            </label>
            <input
              type='text'
              placeholder='Verseny neve'
              className='w-full input input-bordered'
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Leírás</span>
            </label>
            <textarea
              className='textarea textarea-bordered w-full h-24'
              placeholder='A verseny leírása'
              required
            ></textarea>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Verseny kezdete
                {/* Kell ellenőrzés, hogy jövőbeni időpontot adjon meg a létrehozó! */}
              </span>
            </label>
            <input
              type='datetime-local'
              placeholder='Keresés'
              className='w-full input input-bordered'
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Feladatsor hozzárendelése
              </span>
            </label>
            <input
              type='text'
              placeholder='Keresés'
              className='w-full input input-bordered'
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Csapatok hozzárendelése
              </span>
            </label>
            <input
              type='text'
              placeholder='Keresés'
              className='w-full input input-bordered'
            />
          </div>
          {/* Hozzárendelt csapatok megjelenítése */}
          <div className='pt-3'>
            <b>Résztvevő csapatok</b>
            <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-teal-950 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
              <li>
                <button type='button'>X</button>Bug Bontó Brigád
              </li>
              <li>
                <button type='button'>X</button>GitEgylet
              </li>
              <li>
                <button type='button'>X</button>VarLé 2.0
              </li>
            </ul>
          </div>
          <div className='pt-5'>
            <button
              className='btn w-full bg-green-900 hover:bg-green-700'
              type='submit'
            >
              Verseny létrehozása
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
