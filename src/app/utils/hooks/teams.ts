'use-client';
import useSWR from 'swr';
import { fetchTeams, fetchTeam } from '../fetchers/teams';

export function useTeams(): {
  teams: Team[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Team[]>('teams', fetchTeams);
  const isError = !data && !isLoading;
  return {
    teams: data,
    isLoading,
    isError,
  };
}

export function useTeam(id: Team['id']): {
  team: Team | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading } = useSWR<Team>(`teams/${id}`, fetchTeam);
  const isError = !data && !isLoading;
  return {
    team: data,
    isLoading,
    isError,
  };
}
