import { Award03 } from '@untitled-ui/icons-react';
import Link from 'next/link';
import { fetchSettings } from '@/app/utils/fetchers/settings';
import { fetchCurrentCompetitions } from '@/app/utils/fetchers/competitions';
import { fetchIntro } from '@/app/utils/fetchers/intro';
import { fetchMe, fetchUsers } from '@/app/utils/fetchers/users';
import { fetchTeam } from '@/app/utils/fetchers/teams';

export default async function Introduction() {
  const settings = await fetchSettings();
  const intro = await fetchIntro();
  const me = await fetchMe();
  let currentCompetitions = null;
  let users = null;
  let team = null;
  if (me.role === 'student') {
    currentCompetitions = await fetchCurrentCompetitions();
    users = await fetchUsers();
    team = await fetchTeam(me.team);
  }

  const nextCompetition = currentCompetitions?.sort(
    (a: Competition, b: Competition) => (a.start > b.start ? 1 : -1)
  )[0];

  return (
    <div className='bg-base-100'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <Link className='btn btn-ghost normal-case text-xl' href='/'>
            {settings.name}
          </Link>
          {me.role === 'student' && (
            <>
              <div className='pl-5'>Csapatod: {team!.name}</div>
              <div className='pl-10'>
                Csapattársaid:{' '}
                {users!
                  .filter((user) => (user as Student).team === me.team)
                  .map((user) => user.name)
                  .join(', ')}
              </div>
            </>
          )}
        </div>
        <div className='flex-none'>
          {me.role === 'student' && nextCompetition && (
            <Link
              className='btn bg-green-800 hover:bg-green-70'
              href={`/student/countdown/${nextCompetition?.id}`}
            >
              <Award03 />
              {`A legkorábbi versenyig: ${new Date(
                nextCompetition.start
              ).toLocaleString()}`}
            </Link>
          )}
        </div>
      </div>
      <div className='drawer lg:drawer-open mx-auto p-5 px-10 mt-20 container bg-zinc-700 rounded-xl pb-12'>
        <h1 className='text-5xl pb-14 pt-8'>{intro.title}</h1>
        <div className='text-2xl'>{intro.description}</div>
      </div>
    </div>
  );
}
