'use client';

import { useSettings } from '@/app/utils/hooks/settings';
import { updateSettings } from '@/app/utils/fetchers/settings';
import { useEffect, useState } from 'react';

export default function ChangeSiteSettings() {
  const { settings, isLoading, isError } = useSettings();

  const [name, setName] = useState(settings?.name ?? '');
  const [description, setDescription] = useState(settings?.description ?? '');
  const [slogan, setSlogan] = useState(settings?.slogan ?? '');
  const [icon, setIcon] = useState(settings?.icon ?? '');

  useEffect(() => {
    setName(settings?.name ?? '');
    setDescription(settings?.description ?? '');
    setSlogan(settings?.slogan ?? '');
    setIcon(settings?.icon ?? '');
  }, [settings]);

  if (isLoading) return <div>Betöltés...</div>;
  if (isError) return <div>Hiba történt a beállítások betöltése közben.</div>;
  if (!settings)
    return <div>Nincsenek beállítások (ennek nem kéne megtörténnie)</div>;
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateSettings({
      name,
      description,
      slogan,
      icon,
    });
  }

  return (
    <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
      <h1 className='text-3xl font-semibold text-center text-white-700 p-3'>
        Webhely beállítása
      </h1>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div>
          <label className='label'>
            <span className='text-base label-text'>Weboldal neve</span>
          </label>
          <input
            type='text'
            placeholder='VersenyPortál'
            className='w-full input input-bordered'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Weboldal logója</span>
          </label>
          <input type='file' className='file-input file-input-bordered ' />
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Weboldal szlogenje</span>
          </label>
          <textarea
            className='textarea textarea-bordered w-full h-16'
            placeholder='A versenyek webhelye'
            required
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Weboldal leírása</span>
          </label>
          <textarea
            className='textarea textarea-bordered w-full h-40'
            placeholder='Ezen az oldalon versenyeket bonyolíthatsz le, amelyeken különböző csapatok vehetnek részt.'
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
  );
}
