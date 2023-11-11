'use client';
import useSWR from "swr";
import { fetchCompetitions, fetchCompetition, fetchCurrentCompetitions } from "../fetchers/competitions";

export function useCompetitions(): {
  competitions: Competition[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Competition[]>("competitions", fetchCompetitions);
  const isError = !data && !isLoading;
  return {
    competitions: data,
    isLoading,
    isError,
  };
}

export function useCompetition(id: number): {
  competition: Competition | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Competition>(`competitions/${id}`, () => fetchCompetition(id));
  const isError = !data && !isLoading;
  return {
    competition: data,
    isLoading,
    isError,
  };
}

export function useCurrentCompetitions(): {
  competitions: Competition[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Competition[]>("competitions/now", fetchCurrentCompetitions);
  const isError = !data && !isLoading;
  return {
    competitions: data,
    isLoading,
    isError,
  };
}
