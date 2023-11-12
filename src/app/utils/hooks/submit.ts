'use client';
import useSWR from 'swr';
import { fetchSubmits } from '../fetchers/submit';

export function useSubmits(): {
  submits: SubmitResult[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<SubmitResult[]>('submit', fetchSubmits);
  const isError = !data && !isLoading;
  return {
    submits: data,
    isError,
    isLoading,
  };
}
