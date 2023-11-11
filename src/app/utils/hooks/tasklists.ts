'use client';

import useSWR from "swr";
import { fetchTasklists, fetchTasklist } from "../fetchers/tasklists";

export function useTasklists(): {
  tasklists: TaskList[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<TaskList[]>("tasklists", fetchTasklists);
  const isError = !data && !isLoading;
  return {
    tasklists: data,
    isLoading,
    isError,
  };
}

export function useTasklist(id: TaskList['id']): {
  tasklist: TaskList | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<TaskList>(`tasklists/${id}`, () => fetchTasklist(id));
  const isError = !data && !isLoading;
  return {
    tasklist: data,
    isLoading,
    isError,
  };
}
