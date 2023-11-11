export async function fetchTeams(): Promise<Team[]> {
  const teams = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/teams', {
    cache: 'no-cache',
  });
  if (!teams.ok) {
    throw new Error(teams.statusText);
  }
  return await teams.json();
}

export async function fetchTeam(id: Team['id']): Promise<Team> {
  const team = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/teams/' + id,
    {
      cache: 'no-cache',
    }
  );
  if (!team.ok) {
    throw new Error(team.statusText);
  }
  return await team.json();
}
