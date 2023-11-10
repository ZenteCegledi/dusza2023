import { NextResponse } from "next/server";

export async function GET() {
  const tasklists: TaskList[] = [
    { id: 1, name: "Tasklist 1", tasks: [1, 2, 3, 4] },
    { id: 2, name: "Tasklist 2", tasks: [1, 2, 3, 4] },
    { id: 3, name: "Tasklist 3", tasks: [1, 2, 3, 4] },
    { id: 4, name: "Tasklist 4", tasks: [1, 2, 3, 4] },
  ]

  return NextResponse.json(tasklists);
}

export async function POST(request: Request) {
  const tasklist: TaskList = await request.json();

  console.log("Tasklist", tasklist);
  return NextResponse.json(tasklist);
}
