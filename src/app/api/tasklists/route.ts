import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const tasklists: TaskList[] = []

  const dbTaskList = await prisma.taskList.findMany({include: {task:true}});
  for (const dbTaskListElement of dbTaskList) {
    const tasksIds: number[] = []
    for (const task of dbTaskListElement.task) {
      tasksIds.push(task.id)
    }
    tasklists.push({
      id: dbTaskListElement.id,
      name: dbTaskListElement.name,
      tasks: tasksIds
    })
  }

  return NextResponse.json(tasklists);
}

export async function POST(request: Request) {
  const tasklist: Omit<TaskList, "id"> = await request.json();

  await prisma.taskList.create({
    data: {
      name: tasklist.name,
    }
  })

  console.log("Tasklist", tasklist);
  return NextResponse.json(tasklist);
}
