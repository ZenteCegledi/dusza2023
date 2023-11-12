'use client';

import { useEffect, useState } from 'react';
import { updateTasklist } from '@/app/utils/fetchers/tasklists';
import { useTasks } from '@/app/utils/hooks/tasks';
import { useTasklist } from '@/app/utils/hooks/tasklists';

export default function ChangeTasklist({ params }: { params: { id: TaskList['id'] } }) {
  const id = params.id;

  const tasksQuery = useTasks();
  const tasklistQuery = useTasklist(id);

  const [name, setName] = useState('');
  const [selectedTasks, setSelectedTasks] = useState<Task['id'][]>([]);

  const handleSubmit = async ({
    name,
    tasks,
  }: {
    name: TaskList['name'];
    tasks: TaskList['tasks'];
    }) => {
    if (tasks.length === 0 || tasks.length % 3 !== 0) {
      alert('A feladatsorban lévő feladatok számának 3-mal oszthatónak kell lennie!');
      return;
    }
    
    await updateTasklist({
      id,
      name,
      tasks,
    });
  };

  useEffect(() => {
    if (tasklistQuery.tasklist) {
      console.log(tasklistQuery.tasklist);
      setName(tasklistQuery.tasklist.name);
      setSelectedTasks(tasklistQuery.tasklist.tasks);
    }
  }, [tasklistQuery.tasklist]);

  if (tasksQuery.isLoading || tasklistQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (tasksQuery.isError) {
    return <div>Error while loading tasks.</div>;
  }
  if (tasklistQuery.isError) {
    return <div>Error while loading tasklist.</div>;
  }
  if (!tasklistQuery.tasklist) {
    return <div>Tasklist not found.</div>;
  }

  const tasks = tasksQuery!.tasks;

  console.log(selectedTasks);

  return (
    <div className='w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg bg-gray-900'>
      <h1 className='text-3xl font-semibold text-center text-white-700 pb-3 px-5'>
        Feladatsor szerkesztése
      </h1>
      <form
        className='space-y-4'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ name, tasks: selectedTasks });
        }}
      >
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='pb-5'>
          <label className='label'>
            <span className='text-base label-text'>Feladatsor neve</span>
          </label>
          <input
            type='text'
            placeholder=''
            className='w-full input input-bordered'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* <div className='pb-2'>
          <label className='label'>
            <span className='text-base label-text'>Osztály</span>
          </label>
          <select className='select select-bordered w-full'>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div> */}
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='form-control'>
          <div className='flex flex-col'>
            {tasks!.map((task) => (
              <label
                key={task.id}
                className='cursor-pointer label flex items-center'
              >
                <span className='label-text'>{task.words.join(', ')}</span>
                <input
                  type='checkbox'
                  className='checkbox checkbox-info'
                  checked={selectedTasks.includes(task.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTasks([...selectedTasks, task.id]);
                    } else {
                      setSelectedTasks(
                        selectedTasks.filter((id) => id !== task.id)
                      );
                    }
                  }}
                />
              </label>
            ))}
          </div>
        </div>
        <hr className=' h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
        <div className='pt-1'>Kiválasztott feladatok száma: {selectedTasks.length}</div>
        <div className='pt-1'>
          <button className='btn w-full bg-green-900 hover:bg-green-700'>
            Feladatsor létrehozása
          </button>
        </div>
      </form>
    </div>
  );
}
