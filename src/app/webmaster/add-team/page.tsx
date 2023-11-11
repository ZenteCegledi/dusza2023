'use client';

import { useState } from 'react';

export default function AddTeam() {
  // TODO: Add student search
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description } as Team),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 pb-5 pt-4 px-8'>
          Csapat létrehozása
        </h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <div>
            <label className='label'>
              <span className='text-base label-text'>Név</span>
            </label>
            <input
              type='text'
              placeholder='Csapat neve'
              className='w-full input input-bordered'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Leírás</span>
            </label>
            <textarea
              className='textarea textarea-bordered w-full h-24'
              placeholder='A csapat leírása'
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Versenyzők hozzárendelése (nem kötelező)
              </span>
            </label>
            <input
              type='text'
              placeholder='Keresés'
              className='w-full input input-bordered'
            />
          </div>
          {/* Hozzárendelt tanulók megjelenítése */}
          <div className='pt-3'>
            <b>Versenyzők</b>
            <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-teal-950 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
              <li>
                <button type='button'>X</button>Ceglédi Zente Holló (@ceglediz)
              </li>
              <li>
                <button type='button'>X</button>Császár Zoltán (@zoli06)
              </li>
              <li>
                <button type='button'>X</button>Demeter Áron (@coffeelink)
              </li>
            </ul>
          </div>
          <div className='pt-5'>
            <button
              className='btn w-full bg-green-900 hover:bg-green-700'
              type='submit'
            >
              Csapat hozzáadása
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
