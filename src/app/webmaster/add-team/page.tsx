'use client';

import { useEffect, useState } from 'react';
import { useUsers } from '@/app/utils/hooks/users';
import { createTeam } from '@/app/utils/fetchers/teams';
import { updateUser } from '@/app/utils/fetchers/users';

export default function AddTeam() {
  const usersQuery = useUsers();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [studentsSearch, setStudentsSearch] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<User[]>([]);
  const [unselectedStudents, setUnselectedStudents] = useState<User[]>([]);

  useEffect(() => {
    if (!usersQuery.users) return;
    setUnselectedStudents(
      usersQuery.users.filter(
        (user) =>
          !selectedStudents.some(
            (selectedStudent) => selectedStudent.id === user.id
          ) && user.name.toLowerCase().includes(studentsSearch.toLowerCase())
      )
    );
  }, [usersQuery.users, selectedStudents, studentsSearch]);

  if (usersQuery.isLoading) return <div>Betöltés...</div>;
  if (usersQuery.isError)
    return <div>Hiba történt a felhasználók betöltése közben.</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const team = await createTeam({
      name,
      description,
    });
    if (!team) {
      alert('Hiba történt a csapat létrehozása közben.');
      return;
    }

    for (const student of selectedStudents) {
      await updateUser({
        ...student,
        team: team.id,
      } as Student);
    }

    console.log("hibakezelés is kéne ig")
    alert('A csapat sikeresen létre lett hozva.');
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
              value={studentsSearch}
              onChange={(e) => setStudentsSearch(e.target.value)}
            />
          </div>
          {/* Hozzárendelt tanulók megjelenítése */}
          <div className='pt-3'>
            <b>Adj hozzá versenyzőt</b>
            <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-green-900 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
              {unselectedStudents.map((student) => (
                <li key={student.id}>
                  <button
                    type='button'
                    className='hover:bg-green-950'
                    onClick={() => {
                      setUnselectedStudents(
                        unselectedStudents.filter(
                          (unselectedStudent) =>
                            unselectedStudent.id !== student.id
                        )
                      );
                      setSelectedStudents([...selectedStudents, student]);
                    }}
                  >
                    +
                  </button>
                  {student.name} (@{student.username})
                </li>
              ))}
            </ul>
          </div>
          <div className='pt-3'>
            <b>Hozzáadott versenyzők</b>
            <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-red-900 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
              {selectedStudents.map((student) => (
                <li key={student.id}>
                  <button
                    type='button'
                    className='hover:bg-red-950'
                    onClick={() => {
                      setSelectedStudents(
                        selectedStudents.filter(
                          (selectedStudent) => selectedStudent.id !== student.id
                        )
                      );
                      setUnselectedStudents([...unselectedStudents, student]);
                    }}
                  >
                    X
                  </button>
                  {student.name} (@{student.username})
                </li>
              ))}
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
