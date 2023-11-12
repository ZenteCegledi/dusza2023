'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createTask } from '@/app/utils/fetchers/tasks';
import { validateTask } from '@/app/utils/others';

export default function AddTask() {
  const [tasks, setTasks] = useState('');

  const onFileLoad = (e: ProgressEvent<FileReader>) => {
    const content = e.target?.result as string;
    setTasks(content);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tasksArray = tasks.split('\n');
    const tasksArrayLength = tasksArray.length;
    const tasksArrayLengthModulo = tasksArrayLength % 3;
    if (tasksArrayLength === 0 || tasksArrayLengthModulo !== 0) {
      alert(
        'A feladatok számának 3-mal oszthatónak kell lennie és nem lehet 0!'
      );
      return;
    }

    const functions = [];
    for (let i = 0; i < tasksArrayLength; i += 3) {
      // remove last
      const words = tasksArray[i].split(' ').slice(0, -1);

      if (words.length !== 4) {
        alert('A feladatnak pontosan 4 szóból kell állnia!');
        return;
      }

      const grade = Number(tasksArray[i].split(' ').slice(-1)[0]) as Grade;

      if (Number.isNaN(grade)) {
        alert('A feladat osztályának számnak kell lennie!');
        return;
      }

      const task = {
        words,
        grade,
        // TODO: add creator
        creatorTeacher: 1,
      };

      const valid = validateTask(task);

      if (!valid) {
        alert(
          'Kérlek ellenőrizd, hogy minden feladat megfelelően lett megadva!'
        );
        return;
      }

      functions.push(createTask(task));
    }

    const results = await Promise.all(functions);

    if (results.some((result) => !result)) {
      alert(
        'Hiba történt a feladatok feltöltése közben. Kérlek ellenőrizd, hogy minden feladat megfelelően lett megadva!'
      );
      return;
    }

    alert('Sikeresen feltöltötted a feladatokat!');
  };

  return (
    <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
      <h1 className='text-3xl font-semibold text-center text-white-700 pb-5'>
        Feladatok feltöltése
      </h1>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='pb-5'>
          <label className='label'>
            <span className='text-base label-text'>
              Feladatok feltöltése (
              <Link href='/minta.txt' target='_blank' className='text-blue-300'>
                minta
              </Link>
              )
            </span>
          </label>
          <input
            type='file'
            className='file-input file-input-bordered w-full'
            accept='.txt'
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const fileReader = new FileReader();
              fileReader.onload = onFileLoad;
              fileReader.readAsText(file);
            }}
          />
        </div>

        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-64 h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
            vagy
          </span>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>
              Feladatok hozzáadása manuálisan (soronként)
            </span>
          </label>
          <textarea
            className='textarea textarea-bordered w-full h-40'
            placeholder='Példa: alma ananász mogyoró szamóca 6'
            required
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          ></textarea>
        </div>

        <div className='pt-2'>
          <button className='btn w-full bg-green-900 hover:bg-green-700  '>
            Feladatok feltöltése
          </button>
        </div>
      </form>
    </div>
  );
}
