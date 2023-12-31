import { NextResponse } from "next/server";
import { validateTask } from "@/app/utils/others";
import prisma from "@/lib/db";
import {fitIntoGrades} from "@/app/utils/grades";


export async function GET() {
  const tasks: Task[] = []

  const db_tasks = await prisma.task.findMany()
  for (const dbTask of db_tasks) {
    const words_db = await prisma.words.findMany({where: { taskId: dbTask.id }, select: {word: true}})

    let words: string[] = []
    for (const word of words_db) {
      words.push(word.word)
    }

    const task : Task = {id: dbTask.id, grade: fitIntoGrades(dbTask.grade), words: words, creatorTeacher: 1}
    tasks.push(task)
  }

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const task: Omit<Task, 'id'> = await request.json();

  if (!validateTask(task)) {
    return NextResponse.error();
  }

  const db_task = await prisma.task.create({
    data: {
      grade: task.grade,
    },
  });

  for (const word of task.words) {
    await prisma.words.create({
      data: {
        word: word,
        taskId: db_task.id
      }
    })
  }

  console.log("Task", task);

  return NextResponse.json(task);
}
