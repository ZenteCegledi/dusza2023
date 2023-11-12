import { NextResponse } from "next/server";
import {fitIntoGrades} from "@/app/utils/grades";
import prisma from "@/lib/db";
import db from "@/lib/db";

export async function GET(request: Request) {
  const id: Competition["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const competition: Competition = {
    id: parseInt(id),
    name: "Competition 1",
    description: "Description 1",
    grade: 5,
    tasklist: 1,
    start: new Date(),
    end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    teams: [1, 2, 3, 4],
  };
  const dbCompetition = await prisma.competition.findFirst({ where: { id: parseInt(id) }, include: {teams: true, taskList: true} })
  if (!dbCompetition) { return NextResponse.error() }
  const teams : number[] = []

  for (const teamID of dbCompetition.teams) {
    teams.push(teamID.id)
  }

  if (!dbCompetition.taskList[0]) {
    return NextResponse.error()
  }

  return NextResponse.json({
    id: dbCompetition.id,
    name: dbCompetition.name,
    description: dbCompetition.description,
    grade: fitIntoGrades(dbCompetition.grade),
    tasklist: dbCompetition.taskList[0].id,
    start: dbCompetition.start,
    end: dbCompetition.end,
    teams: teams
  });
}

export async function PUT(request: Request) {
  const competition: Competition = await request.json();

  const OriginalDBState = await prisma.competition.findFirst({where: {id: competition.id }, include: {teams: true, taskList: true} } );
  if (!OriginalDBState) { return NextResponse.error() }

  const teams : number[] = []
  for (const team of OriginalDBState.teams) {
    teams.push(team.id)
  }

  const newTeams : number[] = [];
  for (const team of competition.teams) {
    newTeams.push(team)
  }

  const comp = await prisma.competition.update({where: {id: competition.id}, data: {
      name: competition.name,
      description: competition.description,
      grade: competition.grade,
      taskList: {
        connect: {id: competition.tasklist},
        disconnect: {id: OriginalDBState.taskList[0].id}
      },
      start: competition.start,
      end: competition.end,
  }})

  if(!comp) { return NextResponse.error() }

  // Disconnect all teams
  for (const team of teams) {
    await prisma.team.update({where: {id: team}, data: { completions: { disconnect: { id: comp.id } } } });
  }
  // Connect new teams
  for (const newTeam of newTeams) {
    await prisma.team.update({where: {id: newTeam}, data: { completions: { connect: { id: comp.id } } } } );
  }


  console.log("Competition", competition);
  return NextResponse.json(competition);
}

export async function DELETE(request: Request) {
  const id: Competition["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete competition", id);
  return NextResponse.json({ id: parseInt(id) });
}
