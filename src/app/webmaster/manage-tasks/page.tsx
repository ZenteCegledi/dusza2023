'use client';

import {
  Edit03,
  FilePlus02,
  FilterFunnel01,
  Trash01,
} from '@untitled-ui/icons-react';
import Link from 'next/link';
import { useTasks } from '@/app/utils/hooks/tasks';
import { useTasklists } from '@/app/utils/hooks/tasklists';
import { deleteTask } from '@/app/utils/fetchers/tasks';

export default function ManageTasks() {
  const tasksQuery = useTasks();
  const tasklistsQuery = useTasklists();

  if (tasksQuery.isLoading || tasklistsQuery.isLoading) return <div>Betöltés...</div>;
  if (tasksQuery.isError) return <div>Hiba történt a feladatok betöltése közben.</div>;
  if (tasklistsQuery.isError) return <div>Hiba történt a feladatsorok betöltése közben.</div>;
  if (!tasksQuery.tasks) return <div>Nincsenek feladatok</div>;

  const tasks = tasksQuery.tasks;

  const handleDeleteTask = async (id: number) => {
    const success = await deleteTask(id);

    if (success) {
      alert('Sikeresen törölted a feladatot!');
    } else {
      alert('Hiba történt a feladat törlése közben!');
    }
  };

  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              {/* Adott tanár csak a saját feladatait kezelheti! */}
              <h1 className='text-3xl '>Feladatok kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <button
                className='btn bg-blue-800 hover:bg-blue-600 mr-3'
                id='filterButton'
              >
                Szűrés <FilterFunnel01 />
              </button>
              <Link href='./' className='btn bg-green-800 hover:bg-green-700'>
                Új feladatok hozzáadása <FilePlus02 />
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
            <th>Feladat szavai</th>
            <th>Osztály</th>
            <th>Feltöltő tanár</th>
            <th>Feladatsor</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr className='hover:bg-gray-700' key={task.id}>
              <th>{task.id}</th>
              <td>{task.words.join(', ')}</td>
              <td>{task.grade}</td>
              <td>{task.creatorTeacher}</td>
              <td>{tasklistsQuery.tasklists?.find((tasklist) => tasklist.id === task.id)?.name}</td>

              <td>
                <Link className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3' href={`/webmaster/change-task/${task.id}`}>
                  <Edit03 />
                </Link>
                <button
                  className='btn bg-red-900 hover:bg-red-700 px-3'
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Trash01 />
                </button>
              </td>
            </tr>
          ))}

          {/* <br /> */}
        </tbody>
      </table>
    </div>
  );
}
