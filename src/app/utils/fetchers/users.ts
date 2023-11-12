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

export async function fetchUser(id: User['id']): Promise<User> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users/' + id, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchMe(): Promise<User> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users/me', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function createUser(user: User): Promise<User> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/users', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(user),
  });
  mutate('users');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function updateUser(user: User): Promise<User> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/users/' + user.id,
    {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(user),
    }
  );
  mutate('users');
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
