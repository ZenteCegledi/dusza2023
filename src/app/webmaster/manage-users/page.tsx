'use client';

import { Edit03, FilterFunnel01, Trash01, UserPlus02 } from '@untitled-ui/icons-react';
import Link from 'next/link';
import { useUsers } from '@/app/utils/hooks/users';
import { useTeams } from '@/app/utils/hooks/teams';
import { deleteUser } from '@/app/utils/fetchers/users';

export default function ManageUsers() {
  const {
    users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useUsers();
  const {
    teams,
    isLoading: isTeamsLoading,
    isError: isTeamsError,
  } = useTeams();

  const isLoading = isUsersLoading || isTeamsLoading;
  const isError = isUsersError || isTeamsError;

  const handleDeleteUser = async (id: number) => {
    const success = await deleteUser(id);

    if (success) {
      alert('Sikeresen törölted a felhasználót!');
    } else {
      alert('Hiba történt a felhasználó törlése közben!');
    }
  };

  return (
    <div className='overflow-x-auto m-5 p-3 bg-base-200 rounded-lg w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>Felhasználók kezelése</h1>
            </td>
            <td className='flex justify-end pb-4'>
              <button
                className='btn bg-blue-800 hover:bg-blue-600 mr-3'
                id='filterButton'
              >
                Szűrés jogkörre <FilterFunnel01 />
              </button>

              <Link href='/webmaster/add-user' className='btn bg-green-800 hover:bg-green-700'>
                Felhasználó hozzáadása <UserPlus02 />
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
            <th>Felhasználónév</th>
            <th>Jogosultsági kör</th>
            <th>Csapat</th>
            <th>Osztály</th>
            <th>Kezelés</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={7} className='text-center'>
                Betöltés...
              </td>
            </tr>
          )}
          {isError && (
            <tr>
              <td colSpan={7} className='text-center'>
                Hiba történt a felhasználók betöltése közben.
              </td>
            </tr>
          )}
          {!isLoading &&
            !isError &&
            (users!.map((user) => (
              <tr key={user.id} className='hover:bg-gray-700'>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === 'student' && user.team
                    ? teams!.find((team) => team.id === user.team)?.name ||
                      'Hiba'
                    : '-'}
                </td>
                <td>
                  {user.role === 'student'
                    ? `${user.grade}. ${user.class}`
                    : '-'}
                </td>
                <td>
                  <Link className='btn bg-yellow-900 hover:bg-yellow-700 mr-2 px-3' href={`/webmaster/edit-user/${user.id}`}>
                    <Edit03 />
                  </Link>
                  <button
                    className='btn bg-red-900 hover:bg-red-700 px-3'
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash01 />
                  </button>
                </td>
              </tr>
            )) || (
              <tr>
                <td colSpan={7} className='text-center'>
                  Nincsenek felhasználók
                </td>
              </tr>
            ))}
          {/* <br /> */}
        </tbody>
      </table>
    </div>
  );
}
