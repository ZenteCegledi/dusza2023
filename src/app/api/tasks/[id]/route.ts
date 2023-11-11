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

  // Validate Existence of Task
  const task_db = await prisma.task.findFirst({
    where: {
      id: task.id
    }
  })

  if (!task_db) {
    return NextResponse.error()
  }

  // Update Words
  const words = await prisma.words.findMany({where: {taskId: task.id}})
  words.sort((a, b) => b.id - a.id) // Sort based on ID

  let i = 0
  for (const word of words) {
    await prisma.words.update({
      where: {
        id: word.id
      },
      data: {
        word: task.words[i]
      }
    })
    i++
  }
  // Update Task
  await prisma.task.update({
    where: {
      id: task_db.id
    },
    data: {
      grade: task.grade
    }
  });

  // Return Task if success, Error if not TODO: prisma error check

  console.log("Task", task);

  return NextResponse.json(task);
}

export async function DELETE(request: Request) {
  const id: Task["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  // Del words
  await prisma.words.deleteMany({
    where: {
      taskId: id
    }
  })

  await prisma.task.delete({
    where: {
      id: id
    }
  })

  console.log("Delete task", id);
  return NextResponse.json({ id: parseInt(id) });
}
