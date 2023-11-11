export async function fetchSettings(): Promise<Settings> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/settings', {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}