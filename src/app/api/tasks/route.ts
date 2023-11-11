import { NextResponse } from "next/server";
import { validateTask } from "./validate";

export async function GET() {
  const tasks: Task[] = [
    { id: 1, words: ["word1", "word2", "word3", "word4"], grade: 5 },
    { id: 2, words: ["word1", "word2", "word3", "word4"], grade: 5 },
    { id: 3, words: ["word1", "word2", "word3", "word4"], grade: 5 },
    { id: 4, words: ["word1", "word2", "word3", "word4"], grade: 5 },
  ]

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const task: Omit<Task, "id"> = await request.json();

  if (!validateTask(task)) {
    return NextResponse.error();
  }

  console.log("Task", task);

  return NextResponse.json(task);
}