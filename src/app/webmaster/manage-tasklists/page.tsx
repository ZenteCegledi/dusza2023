'use client';

import { Edit03, FilePlus02, Trash01 } from '@untitled-ui/icons-react';
import Link from 'next/link';
import { useTasklists } from '@/app/utils/hooks/tasklists';
import { deleteTasklist } from '@/app/utils/fetchers/tasklists';

export default function ManageTaskLists() {
  const { tasklists, isLoading, isError } = useTasklists();

  if (isLoading) return <div>Betöltés...</div>;
  if (isError) return <div>Hiba történt a feladatsorok betöltése közben.</div>;
  if (!tasklists) return <div>Nincsenek feladatsorok</div>;

  const handleDeleteTasklist = async (id: number) => {
    const success = await deleteTasklist(id);

    if (success) {
      alert('Sikeresen törölted a feladatsort!');
    } else {
      alert('Hiba történt a feladatsor törlése közben!');
    }
  }

  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Feladatsorok kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                Feladatsor hozzáadása <FilePlus02 />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
      <table className='table bg-gray-800'>
        <thead>
          <tr>
            <th>#</th>
            <th>Feladatsor neve</th>
            <th>Verseny</th>
            <th>Feladatok száma</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          {tasklists.map((tasklist) => (
            <tr key={tasklist.id} className='hover:bg-gray-700'>
              <th>{tasklist.id}</th>
              <td>{tasklist.name}</td>
              <td>((Competition id))</td>
              <td>{tasklist.tasks.length}</td>
              <td>
                <button className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'>
                  <Edit03 />
                </button>
                <button className='btn bg-red-900 hover:bg-red-700 px-3' onClick={() => handleDeleteTasklist(tasklist.id)}>
                  <Trash01 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
