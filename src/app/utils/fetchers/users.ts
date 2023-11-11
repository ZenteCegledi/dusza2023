import { mutate } from "swr";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function deleteUser(id: User['id']): Promise<boolean> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/users/' + id,
    {
      method: 'DELETE',
      cache: 'no-cache',
    }
  );
  mutate('users');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return true;
}
