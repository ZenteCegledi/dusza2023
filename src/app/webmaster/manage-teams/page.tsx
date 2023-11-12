'use client';

import { Edit03, Trash01, UsersPlus } from '@untitled-ui/icons-react';
import Link from 'next/link';
import { useTeams } from '@/app/utils/hooks/teams';
import { useUsers } from '@/app/utils/hooks/users';
import { deleteTeam } from '@/app/utils/fetchers/teams';

export default function ManageTeams() {
  const teamsQuery = useTeams();
  const usersQuery = useUsers();

  if (teamsQuery.isLoading || usersQuery.isLoading) return <div>Betöltés...</div>;
  if (teamsQuery.isError) return <div>Hiba történt a csapatok betöltése közben.</div>;
  if (usersQuery.isError) return <div>Hiba történt a felhasználók betöltése közben.</div>;
  if (!teamsQuery.teams) return <div>Nincsenek csapatok</div>;

  const teams = teamsQuery.teams;
  const users = usersQuery.users as Student[];

  const handleDeleteTeam = async (id: number) => {
    const success = await deleteTeam(id);

    if (success) {
      alert('Sikeresen törölted a csapatot!');
    } else {
      alert('Hiba történt a csapat törlése közben!');
    }
  }

  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Csapatok kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <Link href='/webmaster/add-team' className='btn bg-green-800 hover:bg-green-700'>
                Csapat hozzáadása <UsersPlus />
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
            <th>Név</th>
            <th>Leírás</th>
            <th>Csapattagok</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr className='hover:bg-gray-700' key={team.id}>
              <th>{team.id}</th>
              <td>{team.name}</td>
              <td>{team.description}</td>
              <td>
                {users?.filter((user) => user.team === team.id).map((user) => (
                  <div key={user.id}>{user.name}</div>
                ))}
              </td>
              <td>
                <Link className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3' href={`/webmaster/change-team/${team.id}`}>
                  <Edit03 />
                </Link>
                <button className='btn bg-red-900 hover:bg-red-700 px-3' onClick={() => handleDeleteTeam(team.id)}>
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
