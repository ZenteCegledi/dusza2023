import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const DBteam = await prisma.team.findFirst({
  where: {
    id: parseInt(id),
  }
  })

  if (!DBteam) {
    return NextResponse.error()
  }

  const team: Team = {
    id: parseInt(id),
    name: DBteam.name,
    description: DBteam.description,
  };

  return NextResponse.json(team);
}

export async function PUT(request: Request) {
  const team: Team = await request.json();
  if (!await prisma.team.findFirst({where: { id: team.id } } )) {
    return NextResponse.error()
  }

  await prisma.team.update({
    where: { id: team.id },
    data: {
      name: team.name,
      description: team.description
    }
  })

  console.log("Team", team);
  return NextResponse.json(team);
}

export async function DELETE(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  if (!await prisma.team.findFirst({where: { id: parseInt(id) } } )) {
    return NextResponse.error()
  }

  await prisma.team.delete({where: {id: parseInt(id)}})

  console.log("Delete team", id);
  return NextResponse.json({ id: parseInt(id) });
}
