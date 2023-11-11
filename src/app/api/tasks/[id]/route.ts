import { NextResponse } from "next/server";
import { validateTask } from "../validate";

export async function GET(request: Request) {
  const id: Task["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const task: Task = {
    id: parseInt(id),
    words: ["word1", "word2", "word3", "word4"],
    grade: 5,
  };

  return NextResponse.json(task);
}

export async function PUT(request: Request) {
  const task: Task = await request.json();

  if (!validateTask(task)) {
    return NextResponse.error();
  }

  console.log("Task", task);

  return NextResponse.json(task);
}

export async function DELETE(request: Request) {
  const id: Task["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete task", id);
  return NextResponse.json({ id: parseInt(id) });
}
