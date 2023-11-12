'use client';
import useSWR from 'swr';
import { fetchUsers, fetchUser, fetchMe } from '../fetchers/users';

export function useUsers(): {
  users: User[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<User[]>('users', fetchUsers);
  const isError = !data && !isLoading;
  return {
    users: data,
    isLoading,
    isError,
  };
}

export function useUser(id: User['id']): {
  user: User | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<User>(`users/${id}`, () => fetchUser(id));
  const isError = !data && !isLoading;
  return {
    user: data,
    isLoading,
    isError,
  };
}

export function useMe(): {
  user: User | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<User>('users/me', fetchMe);
  const isError = !data && !isLoading;
  return {
    user: data,
    isLoading,
    isError,
  };
}
