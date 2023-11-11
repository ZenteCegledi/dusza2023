'use client';

import useSWR from "swr";
import { fetchTasks, fetchTask } from "../fetchers/tasks";

export function useTasks(): {
  tasks: Task[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Task[]>("tasks", fetchTasks);
  const isError = !data && !isLoading;
  return {
    tasks: data,
    isLoading,
    isError,
  };
}

export function useTask(id: Task['id']): {
  task: Task | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Task>(`tasks/${id}`, () => fetchTask(id));
  const isError = !data && !isLoading;
  return {
    task: data,
    isLoading,
    isError,
  };
}
