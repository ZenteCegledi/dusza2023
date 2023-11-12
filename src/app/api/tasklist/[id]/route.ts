import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const id: TaskList["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const DBresult = await prisma.taskList.findFirst({where: { id: parseInt(id) }, include: {task: true} })
  if (!DBresult) {
    return NextResponse.error()
  }

  const taskIds : number[] = []
  for (const taskId of DBresult.task) {
    taskIds.push(taskId.id)
  }

  return NextResponse.json({
    "id": parseInt(id),
    "name": DBresult.name,
    "tasks": taskIds
  });
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
