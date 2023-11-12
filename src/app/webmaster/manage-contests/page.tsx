'use client';

import {
  Award01,
  Award05,
  BarChart01,
  BarChart02,
  Edit03,
  Trash01,
} from '@untitled-ui/icons-react';
import Link from 'next/link';
import { useCompetitions } from '@/app/utils/hooks/competitions';
import { useTeams } from '@/app/utils/hooks/teams';
import { useTasklists } from '@/app/utils/hooks/tasklists';
import { deleteCompetition } from '@/app/utils/fetchers/competitions';

export default function ManageTeams() {
  const competitionsQuery = useCompetitions();
  const teamsQuery = useTeams();
  const tasklistsQuery = useTasklists();

  if (
    competitionsQuery.isLoading ||
    teamsQuery.isLoading ||
    tasklistsQuery.isLoading
  )
    return <div>Betöltés...</div>;
  if (competitionsQuery.isError)
    return <div>Hiba történt a versenyek betöltése közben.</div>;
  if (teamsQuery.isError)
    return <div>Hiba történt a csapatok betöltése közben.</div>;
  if (tasklistsQuery.isError)
    return <div>Hiba történt a feladatsorok betöltése közben.</div>;
  if (!competitionsQuery.competitions)
    return <div>Nincsenek versenyek</div>;

  const competitions = competitionsQuery.competitions;
  const teams = teamsQuery.teams;
  const tasklists = tasklistsQuery.tasklists;

  const handleDeleteCompetition = async (id: number) => {
    const success = await deleteCompetition(id);

    if (success) {
      alert('Sikeresen törölted a versenyt!');
    } else {
      alert('Hiba történt a verseny törlése közben!');
    }
  }

  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Versenyek kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <Link href='/webmaster/add-contest' className='btn bg-green-800 hover:bg-green-700'>
                <Award05 />
                Verseny hozzáadása
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
      <div className='pr-6'>
        <table className='table bg-gray-800'>
          <thead>
            <tr>
              <th>#</th>
              <th>Név</th>
              <th>Leírás</th>
              <th>Kezdete</th>
              <th>Vége</th>
              <th>Feladatsor</th>
              <th>Résztvevő csapatok</th>
              <th>Kezelés</th>
            </tr>
          </thead>
          <tbody>
            {competitions!.map((competition, index) => (
              <tr className='hover:bg-gray-700' key={competition.id}>
                <th>{index + 1}</th>
                <td>{competition.name}</td>
                <td>{competition.description}</td>
                <td>
                  {new Date(competition.start).toLocaleString()}
                  </td>
                <td>
                  {new Date(competition.end).toLocaleString()}
                </td>
                <td>{tasklists!.find((task) => task.id === competition.tasklist)?.name}</td>
                <td>
                  {teams!
                    .filter((team) => competition.teams.includes(team.id))
                    .map((team) => team.name)
                    .join(', ')}
                </td>
                <td>
                  <Link
                    className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3'
                    href={`/webmaster/change-contest/${competition.id}`}
                  >
                    <Edit03 />
                  </Link>
                  <button
                    className='btn bg-red-900 hover:bg-red-700 px-3'
                    onClick={() => handleDeleteCompetition(competition.id)}
                  >
                    <Trash01 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
