'use client';

import { useEffect, useState } from 'react';
import { useTasklists } from '@/app/utils/hooks/tasklists';
import { useTeams } from '@/app/utils/hooks/teams';
import { useCompetition } from '@/app/utils/hooks/competitions';
import { updateCompetition } from '@/app/utils/fetchers/competitions';

export default function EditContest({ params }: { params: { id: Competition['id'] } }) {
  const id = params.id;

  const tasklistsQuery = useTasklists();
  const teamsQuery = useTeams();
  const competitionQuery = useCompetition(id);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [searchTasklist, setSearchTasklist] = useState('');
  const [selectedTasklists, setSelectedTasklists] = useState<TaskList[]>([]);
  const [unselectedTasklists, setUnselectedTasklists] = useState<TaskList[]>(
    []
  );
  const [searchTeam, setSearchTeam] = useState('');
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const [unselectedTeam, setUnselectedTeam] = useState<Team[]>([]);

  useEffect(() => {
    if (!tasklistsQuery.tasklists) return;
    setUnselectedTasklists(
      tasklistsQuery.tasklists.filter(
        (tasklist) =>
          !selectedTasklists.some(
            (selectedTasklist) => selectedTasklist.id === tasklist.id
          ) &&
          tasklist.name.toLowerCase().includes(searchTasklist.toLowerCase())
      )
    );
  }, [searchTasklist, tasklistsQuery.tasklists]);

  useEffect(() => {
    if (!teamsQuery.teams) return;
    setUnselectedTeam(
      teamsQuery.teams.filter(
        (team) =>
          !selectedTeams.some((selectedTeam) => selectedTeam.id === team.id) &&
          team.name.toLowerCase().includes(searchTeam.toLowerCase())
      )
    );
  }, [searchTeam, teamsQuery.teams]);

  useEffect(() => {
    if (!competitionQuery.competition) return;
    setName(competitionQuery.competition.name);
    setDescription(competitionQuery.competition.description);
    setStart(new Date(competitionQuery.competition.start).toISOString().slice(0, 16));
    setEnd(new Date(competitionQuery.competition.end).toISOString().slice(0, 16));
    setSelectedTasklists(tasklistsQuery.tasklists?.filter((tasklist) => tasklist.id === competitionQuery.competition?.tasklist) ?? []);
    setSelectedTeams(teamsQuery.teams?.filter((team) => competitionQuery.competition?.teams.includes(team.id)) ?? []);
  }, [competitionQuery.competition, tasklistsQuery.tasklists, teamsQuery.teams]);

  if (tasklistsQuery.isLoading || teamsQuery.isLoading || competitionQuery.isLoading)
    return <div>Betöltés...</div>;
  if (tasklistsQuery.isError)
    return <div>Hiba történt a feladatsorok betöltése közben.</div>;
  if (teamsQuery.isError)
    return <div>Hiba történt a csapatok betöltése közben.</div>;
  if (competitionQuery.isError)
    return <div>Hiba történt a verseny betöltése közben.</div>;
  if (!tasklistsQuery.tasklists)
    return <div>Nem található feladatsor.</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedTasklists.length === 0) {
      alert('Nem adtál meg feladatsort!');
      return;
    }

    if (selectedTeams.length === 0) {
      alert('Nem adtál meg csapatokat!');
      return;
    }

    const success = await updateCompetition({
      id,
      name,
      description,
      start: new Date(start),
      end: new Date(end),
      tasklist: selectedTasklists[0].id,
      teams: selectedTeams.map((team) => team.id),
    });

    if (success) {
      alert('Sikeresen szerkesztetted a versenyt!');
    } else {
      alert('Hiba történt a verseny szerkesztése közben!');
    }
  }

  return (
    <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
      <h1 className='text-3xl font-semibold text-center text-white-700 pb-5 pt-4 px-8'>
        Verseny szerkesztése
      </h1>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div>
          <label className='label'>
            <span className='text-base label-text'>Név</span>
          </label>
          <input
            type='text'
            placeholder='Verseny neve'
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
            placeholder='A verseny leírása'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>
              Verseny kezdete
            </span>
          </label>
          <input
            type='datetime-local'
            className='w-full input input-bordered'
            required
            min={new Date().toISOString().slice(0, 16)}
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>
              Verseny vége
            </span>
          </label>
          <input
            type='datetime-local'
            className='w-full input input-bordered'
            required
            /* minimum today or start */
            min={
              start
                ? new Date(start).toISOString().slice(0, 16)
                : new Date().toISOString().slice(0, 16)
            }
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>
              Feladatsor hozzárendelése
            </span>
          </label>
          <input
            type='text'
            placeholder='Keresés'
            className='w-full input input-bordered'
            value={searchTasklist}
            onChange={(e) => setSearchTasklist(e.target.value)}
          />
        </div>
        <div className='pt-3'>
          <b>Adj hozzá feladatsort</b>
          <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-green-900 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
            {unselectedTasklists.length === 0 && 'Nincsenek feladatsorok'}
            {unselectedTasklists.map((tasklist) => (
              <li key={tasklist.id}>
                <button
                  type='button'
                  className='hover:bg-green-950'
                  onClick={() => {
                    setSelectedTasklists([...selectedTasklists, tasklist]);
                    setUnselectedTasklists(
                      unselectedTasklists.filter(
                        (unselectedTasklist) =>
                          unselectedTasklist.id !== tasklist.id
                      )
                    );
                  }}
                  disabled={selectedTasklists.length > 0}
                >
                  +
                </button>
                {tasklist.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-3'>
          <b>Hozzárendelt feladatsor</b>
          <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-red-900 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
            {selectedTasklists.length === 0 && 'Nincsenek feladatsorok'}
            {selectedTasklists.map((tasklist) => (
              <li key={tasklist.id}>
                <button
                  type='button'
                  className='hover:bg-red-950'
                  onClick={() => {
                    setUnselectedTasklists([...unselectedTasklists, tasklist]);
                    setSelectedTasklists(
                      selectedTasklists.filter(
                        (selectedTasklist) =>
                          selectedTasklist.id !== tasklist.id
                      )
                    );
                  }}
                >
                  X
                </button>
                {tasklist.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>
              Csapatok hozzárendelése
            </span>
          </label>
          <input
            type='text'
            placeholder='Keresés'
            className='w-full input input-bordered'
            value={searchTeam}
            onChange={(e) => setSearchTeam(e.target.value)}
          />
        </div>
        {/* Hozzárendelt csapatok megjelenítése */}
        <div className='pt-3'>
          <b>Adj hozzá csapatokat</b>
          <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-green-900 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
            {unselectedTeam.length === 0 && 'Nincsenek csapatok'}
            {unselectedTeam.map((team) => (
              <li key={team.id}>
                <button
                  type='button'
                  className='hover:bg-green-950'
                  onClick={() => {
                    setSelectedTeams([...selectedTeams, team]);
                    setUnselectedTeam(
                      unselectedTeam.filter(
                        (unselectedTeam) => unselectedTeam.id !== team.id
                      )
                    );
                  }}
                >
                  +
                </button>
                {team.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-3'>
          <b>Résztvevő csapatok</b>
          <ul className='px-3 pt-2 [&>*]:my-2 [&>*>*]:btn [&>*>*]:bg-red-900 [&>*>*]:rounded-full [&>*>*]:h-1 [&>*>*]:min-h-0 [&>*>*]:pt-2 [&>*>*]:py-5 [&>*>*]:p-2 [&>*>*]:mr-3'>
            {selectedTeams.length === 0 && 'Nincsenek csapatok'}
            {selectedTeams.map((team) => (
              <li key={team.id}>
                <button
                  type='button'
                  className='hover:bg-red-950'
                  onClick={() => {
                    setUnselectedTeam([...unselectedTeam, team]);
                    setSelectedTeams(
                      selectedTeams.filter(
                        (selectedTeam) => selectedTeam.id !== team.id
                      )
                    );
                  }}
                >
                  X
                </button>
                {team.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-5'>
          <button
            className='btn w-full bg-green-900 hover:bg-green-700'
            type='submit'
          >
            Verseny szerkesztése
          </button>
        </div>
      </form>
    </div>
  );
}
