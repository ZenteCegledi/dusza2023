import { mutate } from 'swr';

export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/tasks', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchTask(id: Task['id']): Promise<Task> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/tasks/' + id, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function createTask(task: Omit<Task, 'id'>): Promise<Task> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/tasks', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(task),
  });
  mutate('tasks');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function updateTask(task: Task): Promise<Task> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/tasks/' + task.id, {
    method: 'PUT',
    cache: 'no-cache',
    body: JSON.stringify(task),
  });
  mutate('tasks');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function deleteTask(id: Task['id']): Promise<boolean> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/tasks/${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
    body: JSON.stringify({ id }),
  });
  mutate('tasks');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return true;
}
