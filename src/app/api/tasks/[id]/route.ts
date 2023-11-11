import { NextResponse } from "next/server";
import { validateTask } from "../validate";
import prisma from "@/lib/db";
import {fitIntoGrades} from "@/app/utils/grades";

export async function GET(request: Request) {
  const id: Task["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const task_info = await prisma.task.findFirst({where: {id: parseInt(id)}})

  if (!task_info) {
    return NextResponse.error()
  }

  const task: Task = {
    id: parseInt(id),
    words: [],
    grade: fitIntoGrades(task_info.grade),
  };

  const words_db = await prisma.words.findMany({where: { taskId: task_info.id }, select: {word: true}})
  for (const wordsDbElement of words_db) {
    task.words.push(wordsDbElement.word)
  }

  return NextResponse.json(task);
}

export async function PUT(request: Request) { // Update value
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
