'use client';

import { Home02, LogOut01 } from '@untitled-ui/icons-react';
import Link from 'next/link';
import { useSubmits } from '../../utils/hooks/submit';
import { useCompetition } from '../../utils/hooks/competitions';
import { useTeams } from '@/app/utils/hooks/teams';

export default function Leaderboard({
  params,
}: {
  params: { id: Competition['id'] };
}) {
  const submitsQuery = useSubmits();
  const competitionQuery = useCompetition(params.id);
  const teamsQuery = useTeams();

  const isLoading = submitsQuery.isLoading || competitionQuery.isLoading || teamsQuery.isLoading;
  const isError = submitsQuery.isError || competitionQuery.isError || teamsQuery.isError;

  if (isLoading)
    return (
      <div className='overflow-x-auto p-3 bg-base-200 w-full'>Betöltés...</div>
    );
  if (isError)
    return (
      <div className='overflow-x-auto p-3 bg-base-200 w-full'>
        Hiba történt!
      </div>
    );

  const submits = submitsQuery.submits?.filter(
    (submit) => submit.competition === competitionQuery.competition?.id
  );

  return (
    <div className='overflow-x-auto p-3 bg-base-200 w-full'>
      <table className='table'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-3xl '>
                {competitionQuery.competition!.name} verseny eredményei
              </h1>
            </td>
            <td className='text-right'>
              <Link href='/' className='btn bg-blue-600 hover:bg-blue-500'>
                Főoldal <Home02 />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700' />
      <table className='table bg-gray-800'>
        <thead>
          <tr>
            <th>Helyezés</th>
            <th>Csapat neve</th>
            <th>Megszerzett pont</th>
            <th>Leadás ideje</th>
            {/* <th>Kezelés</th> */}
          </tr>
        </thead>
        <tbody>
          {/* <tr className='hover:bg-gray-700'>
            <th>1</th>
            <td>Bug Bontó Brigád</td>
            <td>45</td>
            <td>3:54</td>
            {/* <td>
              {' '}
              {/* A kizárás gombot csak akkor jelenítsük meg, ha a felhasználó admin. 
              <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                Kizárás <LogOut01 />
              </button>
            </td> *
          </tr> */}

          {submits!.map((submit, index) => (
            <tr className='hover:bg-gray-700' key={submit.id}>
              <th>{index + 1}</th>
              <td>{teamsQuery.teams!.find((team) => team.id === submit.team)?.name}</td>
              <td>{submit.correctNumber - submit.wrongNumber}</td>
              <td>{submit.date.toLocaleString()}</td>
              {/* <td>
                {' '}
                {/* A kizárás gombot csak akkor jelenítsük meg, ha a felhasználó admin. 
                <button className='btn bg-red-900 hover:bg-red-700 px-3'>
                  Kizárás <LogOut01 />
                </button>
              </td> */}
            </tr>
          ))}

          {/* A holtverseny lekezelése fontos! */}
        </tbody>
      </table>
    </div>
  );
}
