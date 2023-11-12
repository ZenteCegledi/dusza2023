'use client';

import { useRouter } from 'next/navigation';
import { Clock, ClockStopwatch, List } from '@untitled-ui/icons-react';
import { useCompetition } from '../../utils/hooks/competitions';
import { useTasklists } from '@/app/utils/hooks/tasklists';
import { useTasks } from '@/app/utils/hooks/tasks';
import { useState } from 'react';
import { createSubmit } from '@/app/utils/fetchers/submit';
import { redirect } from 'next/navigation';
import { isError } from 'util';

function shufff(str: string, seed: number) {
  var shuffled = str.split('').sort(function () {
    return 0.5 - seed;
  });
  return shuffled.join('');
}

export default function Contest({
  params,
}: {
  params: { id: Competition['id'] };
}) {
  const competitionQuery = useCompetition(params.id);
  const tasklistsQuery = useTasklists();
  const tasksQuery = useTasks();

  const [currentTask, setCurrentTask] = useState(0);
  const [taskSolutions, setTaskSolutions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const [seed, setSeed] = useState(Math.random());

  const router = useRouter();

  const isLoading =
    competitionQuery.isLoading ||
    tasklistsQuery.isLoading ||
    tasksQuery.isLoading;
  const isError =
    competitionQuery.isError || tasklistsQuery.isError || tasksQuery.isError;

  if (isLoading) return <div>Betöltés...</div>;
  if (isError) return <div>Hiba történt!</div>;

  const tasklist = tasklistsQuery.tasklists?.find(
    (tasklist) => tasklist.id === competitionQuery.competition?.tasklist
  );

  console.log(tasklist);

  const tasks = tasksQuery.tasks?.filter((task) =>
    tasklist?.tasks.includes(task.id)
  );

  const handleNextTask = () => {
    if (!tasks) return;
    setInputValue('');
    if (currentTask === tasks?.length - 1) {
      setTaskSolutions([...taskSolutions, inputValue]);
    }
    if (currentTask === tasks?.length - 1) {
      createSubmit({
        competition: competitionQuery.competition?.id,
        solutions: taskSolutions,
      }).then(() => {
        router.push('/contest-end/' + competitionQuery.competition?.id);
      });
      return;
    }
    setCurrentTask(currentTask + 1);
  };

  return (
    <div className='bg-base-100 h-screen flex items-center justify-center'>
      <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
        {isLoading && <div>Betöltés...</div>}
        {isError && <div>Hiba történt a verseny betöltése közben.</div>}
        {!competitionQuery.competition &&
          !competitionQuery.isLoading &&
          !competitionQuery.isError && (
            <div>Nincs ilyen azonosítójú verseny.</div>
          )}
        {!tasks && !isLoading && !isError && (
          <div>
            A versenyhez nem tartozik feladat. Kérlek, lépj kapcsolatba az
            adminisztrátorral.
          </div>
        )}
        {competitionQuery.competition && tasks && !isLoading && !isError && (
          <>
            <h1 className='text-3xl font-semibold text-center text-white-700 px-3'>
              {competitionQuery.competition.name}
            </h1>
            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700' />
            <div className='pb-3'>
              Írd le jó betűsorrendben a negyedik szót!
            </div>
            <div className='text-xl p-2'>
              Jó szavak: {tasks![currentTask]?.words.slice(0, 3).join(', ')}
              <div className='text-xl p-2 pb-6'>
                Negyedik szó: {shufff(tasks![currentTask]?.words[3], seed)}
              </div>
              <div className='space-y-4'>
                <div>
                  <input
                    type='text'
                    placeholder='Negyedik szó helyes betűsorrendben'
                    className='w-full input input-bordered'
                    required
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className='pt-2'>
                  <button
                    className='btn w-full bg-green-900 hover:bg-green-700'
                    onClick={handleNextTask}
                  >
                    {currentTask === tasks!.length - 1
                      ? 'Befejezés'
                      : 'Következő feladat'}
                  </button>
                  <div className='flex items-center justify-center'>
                    <div className='mt-3 mx-1 btn bg-yellow-950 hover:bg-yellow-900'>
                      {/* <List /> Jelenlegi feladat: 1/3 */}
                      <List /> Jelenlegi feladat: {currentTask + 1}/
                      {tasks!.length}
                    </div>
                    <div className='mt-3 mx-1 btn bg-zinc-700 hover:bg-zinc-600'>
                      <ClockStopwatch />
                      {new Date(
                        competitionQuery.competition?.end
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
