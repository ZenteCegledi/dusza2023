'use client';

import { useState } from 'react';

export default function AddOrEditUser({
  title,
  button,
  user,
  submit,
}: {
  title: string;
  button: string;
  user: {
    name: User['name'];
    username: User['username'];
    password: User['password'];
    role: Role;
    grade: Student['grade'];
    class: Student['class'];
  };
  submit: (user: {
    name: User['name'];
    username: User['username'];
    password: User['password'];
    role: Role;
    grade: Student['grade'];
    class: Student['class'];
  }) => Promise<void>;
}) {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password ?? '');
  const [role, setRole] = useState(user.role);
  const [grade, setGrade] = useState((user as Student).grade ?? 5);
  const [class_, setClass] = useState((user as Student).class ?? 'A');

  return (
    <>
      <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        <h1 className='text-3xl font-semibold text-center text-white-700 pb-5'>
          {title}
        </h1>
        <form
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault();
            submit({ name, username, password, role, grade, class: class_ });
          }}
        >
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
              onChange={(e) => setRole(e.target.value as User['role'])}
              required
            >
              <option value='student'>Versenyző</option>
              <option value='teacher'>Tanár</option>
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
                  value={grade}
                  onChange={(e) => setGrade(parseInt(e.target.value))}
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
                  min={5}
                  max={8}
                  value={class_}
                  onChange={(e) => setClass(e.target.value)}
                />
              </div>
            </>
          )}
          <div className='pt-5'>
            <button
              className='btn w-full bg-green-900 hover:bg-green-700'
              type='submit'
            >
              {button}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
