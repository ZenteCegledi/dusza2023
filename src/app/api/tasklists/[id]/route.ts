import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id: TaskList["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const task: TaskList = {
    id: parseInt(id),
    name: "TaskList 1",
    tasks: [1, 2, 3, 4],
  };

  return NextResponse.json(task);
}

export async function PUT(request: Request) {
  const task: Task = await request.json();

  console.log("Task", task);
  return NextResponse.json(task);
}

export async function DELETE(request: Request) {
  const id: Task["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete task", id);
  return NextResponse.json({ id: parseInt(id) });
}
