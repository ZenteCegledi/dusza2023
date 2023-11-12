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

export async function createTeam(team: Omit<Team, 'id'>): Promise<Team> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/teams', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(team),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function updateTeam(team: Team): Promise<Team> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/teams/' + team.id,
    {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(team),
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function deleteTeam(id: Team['id']): Promise<boolean> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/teams/' + id,
    {
      method: 'DELETE',
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return true;
}
