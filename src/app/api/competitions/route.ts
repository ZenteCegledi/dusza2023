import { NextResponse } from 'next/server';
import prisma from "@/lib/db";
import {fitIntoGrades} from "@/app/utils/grades";

export async function GET() {
  const competitions: Competition[] = [];

  const dbCompetitions = await prisma.competition.findMany({include: {teams: true, taskList: true} } )
  for (const dbCompetition of dbCompetitions) {
    const teams : number[] = []

    for (const teamID of dbCompetition.teams) {
      teams.push(teamID.id)
    }

    if (!dbCompetition.taskList[0]) {
      continue;
    }

    competitions.push({
      id: dbCompetition.id,
      name: dbCompetition.name,
      description: dbCompetition.description,
      //grade: fitIntoGrades(dbCompetition.grade),
      tasklist: dbCompetition.taskList[0].id,
      start: dbCompetition.start,
      end: dbCompetition.end,
      teams: teams
    })
  }

  return NextResponse.json(competitions);
}

export async function POST(request: Request) {
  const competition: Omit<Competition, 'id'> = await request.json();

  const comp = await prisma.competition.create({
    data: {
      name: competition.name,
      description: competition.description,
      grade: 5,
      start: competition.start,
      end: competition.end,
      taskList: {
        connect: {id: competition.tasklist}
      },
    }
  })
  if (!comp) { return NextResponse.error() }
  //link teams
  for (const team of competition.teams) {
    await prisma.team.update({
      where: { id : team },
      data: {
        completions: {
          connect: {
            id: comp.id
          }
        }
      }
    })
  }

  console.log('Competition', comp);
  return NextResponse.json(comp);
}
