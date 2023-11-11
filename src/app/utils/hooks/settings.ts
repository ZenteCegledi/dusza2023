'use client';
import useSWR from 'swr';
import { fetchSettings } from '../fetchers/settings';

export function useSettings(): {
  settings: Settings | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Settings>('settings', fetchSettings);
  const isError = !data && !isLoading;
  return {
    settings: data,
    isError,
    isLoading,
  };
}