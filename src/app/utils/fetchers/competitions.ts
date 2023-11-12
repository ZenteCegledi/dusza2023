import { mutate } from "swr";

export async function fetchCompetitions(): Promise<Competition[]> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/competitions',
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchCompetition(id: number): Promise<Competition> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/competitions/' + id,
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchCurrentCompetitions(): Promise<Competition[]> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/competitions/now',
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function createCompetition(
  competition: Omit<Competition, 'id'>
): Promise<Competition> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/competitions',
    {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(competition),
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function updateCompetition(
  competition: Competition
): Promise<Competition> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/competitions/' + competition.id,
    {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(competition),
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function deleteCompetition(id: Competition['id']): Promise<boolean> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/competitions/' + id,
    {
      method: 'DELETE',
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  mutate('competitions');
  return true;
}
