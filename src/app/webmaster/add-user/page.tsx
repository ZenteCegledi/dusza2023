'use client';

import { useState } from 'react';

export default function AddUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, password, role } as User),
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
        <h1 className='text-3xl font-semibold text-center text-white-700 pb-5'>
          Felhasználó létrehozása
        </h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Név</span>
            </label>
            <input
              type='text'
              placeholder='Teljes név'
              className='w-full input input-bordered'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Felhasználónév</span>
            </label>
            <input
              type='text'
              placeholder='Felhasználónév'
              className='w-full input input-bordered'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Jelszó</span>
            </label>
            <input
              type='password'
              placeholder='Jelszó'
              className='w-full input input-bordered'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Szerepkör</span>
            </label>
            <select
              className='select select-bordered w-full'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value='student'>Versenyző</option>
              <option value='webmaster'>Tanár</option>
              <option value='jury'>Zsűritag</option>
            </select>
          </div>
          {role === 'student' && (
            <>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Évfolyam (5-8)</span>
                </label>
                <input
                  type='number'
                  placeholder='Évfolyam'
                  className='w-full input input-bordered'
                  required
                />
              </div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Osztály (A-Z)</span>
                </label>
                <input
                  type='text'
                  placeholder='Osztály'
                  className='w-full input input-bordered'
                  required
                />
              </div>
            </>
          )}
          <div className='pt-5'>
            <button
              className='btn w-full bg-green-900 hover:bg-green-700'
              type='submit'
            >
              Létrehozás
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
