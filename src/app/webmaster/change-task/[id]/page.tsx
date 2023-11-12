'use client';

import { updateTask } from '@/app/utils/fetchers/tasks';
import { useTask } from '@/app/utils/hooks/tasks';
import { useState, useEffect } from 'react';

export default function ChangeTask({ params }: { params: { id: Task['id'] } }) {
  const { task, isLoading, isError } = useTask(params.id);

  const [words, setWords] = useState('');
  const [grade, setGrade] = useState(5);

  useEffect(() => {
    setWords(task?.words.join(', ') ?? '');
    setGrade(task?.grade ?? 5);
  }, [task]);

  const handleSubmit = async ({
    words,
    grade,
  }: {
    words: string;
    grade: Task['grade'];
  }) => {
    if (!task) return;

    const taskWords = words.replace(/\s/g, '').split(',');
    if (taskWords.length !== 4) {
      alert('A feladatnak pontosan 4 szóból kell állnia!');
      return;
    }

    await updateTask({
      id: task.id,
      words: taskWords,
      grade,
      // TODO: add creatorTeacher to task
      creatorTeacher: task.creatorTeacher,
    });

    alert('Sikeresen módosítottad a feladatot!');
  };

  if (isLoading) return <div>Betöltés...</div>;
  if (isError) return <div>Hiba történt a feladat betöltése közben.</div>;
  if (!task) return <div>Nincs ilyen azonosítójú feladat.</div>;

  return (
    <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
      <h1 className='text-3xl font-semibold text-center text-white-700 pb-5 px-5'>
        Feladat szerkesztése
      </h1>
      <form
        className='space-y-4'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ words, grade: grade as Task['grade'] });
        }}
      >
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='pb-5'>
          <label className='label'>
            <span className='text-base label-text'>
              Szavak (vesszővel elválasztva)
            </span>
          </label>
          <input
            type='text'
            placeholder=''
            className='w-full input input-bordered'
            required
            value={words}
            onChange={(e) => setWords(e.target.value)}
          />
        </div>

        <div className='pb-5'>
          <label className='label'>
            <span className='text-base label-text'>Osztály</span>
          </label>
          <select
            className='select select-bordered w-full'
            value={grade}
            onChange={(e) => setGrade(parseInt(e.target.value))}
          >
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>

        <div className='pt-2'>
          <button className='btn w-full bg-green-900 hover:bg-green-700  '>
            Feladat módosítása
          </button>
        </div>
      </form>
    </div>
  );
}
