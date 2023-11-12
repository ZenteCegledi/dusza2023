import { mutate } from "swr";

export async function fetchIntro(): Promise<Intro> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/intro", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function updateIntro(intro: Intro): Promise<Intro> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/intro", {
    method: "PUT",
    cache: "no-cache",
    body: JSON.stringify(intro),
  });
  mutate("intro");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}
