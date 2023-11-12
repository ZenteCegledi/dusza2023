import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const id: TaskList["id"] = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

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
  const tasklist: TaskList = await request.json();

  const OriginalDBContent = await prisma.taskList.findFirst({where: {id: tasklist.id}, include: {task: true}})
  if (!OriginalDBContent) { return NextResponse.error() }
  for (const taskElement of OriginalDBContent.task) {
    await prisma.task.update({where: { id: taskElement.id }, data: { taskListId: null} }) // unassign tasks
  }

  for (const taskId of tasklist.tasks) {
    await prisma.task.update({ where: { id: taskId }, data: { taskListId: tasklist.id} })
  }

  await prisma.taskList.update({
    where: { id: tasklist.id },
    data: {
      name: tasklist.name
    }
  })

  console.log("TaskList", tasklist);
  return NextResponse.json(tasklist);
}

export async function DELETE(request: Request) {
  const id: Task["id"] = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

  await prisma.taskList.delete({where: {id: parseInt(id)}})

  console.log("Delete task", id);
  return NextResponse.json({ id: parseInt(id) });
}
