import { mutate } from "swr";

export async function createSubmit(submitableCompetition: SubmitInput): Promise<SubmitResult> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/submit', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(submitableCompetition),
  });
  mutate('submit');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchSubmits(): Promise<SubmitResult[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/submit', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}
