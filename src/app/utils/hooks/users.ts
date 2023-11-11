'use client';
import useSWR from 'swr';
import { fetchUsers } from '../fetchers/users';

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
