import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const teams: Team[] = []

  const teamsInDb = await prisma.team.findMany();
  for (const teamsInDbElement of teamsInDb) {
    teams.push({
      id: teamsInDbElement.id,
      name: teamsInDbElement.name,
      description: teamsInDbElement.description
    })
  }

  return NextResponse.json(teams);
}

export async function POST(request: Request) {
  const team: Omit<Team, "id"> = await request.json();

  await prisma.team.create({
    data:{
      name: team.name,
      description: team.description
    }
  })

  console.log("Team", team);
  return NextResponse.json(team);
}
