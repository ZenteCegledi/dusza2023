'use client';

import useSWR from 'swr';
import { fetchIntro } from '../fetchers/intro';

export function useIntro(): {
  intro: Intro | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Intro>('intro', fetchIntro);
  const isError = !data && !isLoading;
  return {
    intro: data,
    isLoading,
    isError,
  };
}
