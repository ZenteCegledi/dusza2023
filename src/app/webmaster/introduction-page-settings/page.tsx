'use client';

import { useEffect, useState } from 'react';
import { useIntro } from '@/app/utils/hooks/intro';
import { updateIntro } from '@/app/utils/fetchers/intro';

export default function IntroductionSettings() {
  const { intro, isLoading, isError } = useIntro();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(intro?.title ?? '');
    setDescription(intro?.description ?? '');
  }, [intro]);

  if (isLoading) return <div>Betöltés...</div>;
  if (isError)
    return (
      <div>
        Hiba történt a bemutatkozó oldal beállításainak betöltése közben.
      </div>
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateIntro({
      title,
      description,
    });
  };

  return (
    <>
      <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 p-3'>
          Bemutatkozó oldal szerkesztése
        </h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
