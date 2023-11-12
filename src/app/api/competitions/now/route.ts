import { NextResponse } from 'next/server';
import prisma from "@/lib/db";
import {fitIntoGrades} from "@/app/utils/grades";

const isBetween = (date: Date, min: Date, max: Date) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime());

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

    if (!isBetween(new Date(), dbCompetition.start, dbCompetition.end)) { continue }

    competitions.push({
      id: dbCompetition.id,
      name: dbCompetition.name,
      description: dbCompetition.description,
      tasklist: dbCompetition.taskList[0].id,
      start: dbCompetition.start,
      end: dbCompetition.end,
      teams: teams
    })
  }

  return NextResponse.json(competitions);
}
