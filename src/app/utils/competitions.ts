export async function fetchCompetitions(): Promise<Competition[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/competitions', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchCompetition(id: number): Promise<Competition> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/competitions/' + id, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchCurrentCompetitions(): Promise<Competition[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/competitions/now', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}
