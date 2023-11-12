import { mutate } from "swr";

export async function fetchTasklists(): Promise<TaskList[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/tasklists", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function fetchTasklist(id: TaskList["id"]): Promise<TaskList> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/tasklists/" + id,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function createTasklist(
  tasklist: Omit<TaskList, "id">
): Promise<TaskList> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/tasklists", {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify(tasklist),
  });
  mutate("tasklists");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function updateTasklist(
  tasklist: TaskList
): Promise<TaskList> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/tasklists", {
    method: "PUT",
    cache: "no-cache",
    body: JSON.stringify(tasklist),
  });
  mutate("tasklists");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export async function deleteTasklist(id: TaskList["id"]): Promise<boolean> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/tasklists/${id}`,
    {
      method: "DELETE",
      cache: "no-cache",
      body: JSON.stringify({ id }),
    }
  );
  mutate("tasklists");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return true;
}
