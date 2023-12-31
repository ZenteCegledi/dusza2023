import { NextResponse } from "next/server";
import {fitIntoGrades} from "@/app/utils/grades";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const id: Competition["id"] = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

  const dbCompetition = await prisma.competition.findFirst({ where: { id: parseInt(id) }, include: {teams: true, taskList: true} })
  if (!dbCompetition) { return NextResponse.error() }
  const teams : number[] = []

  for (const teamID of dbCompetition.teams) {
    teams.push(teamID.id)
  }

  const taskList = dbCompetition.taskList.at(0)

  if (!taskList) {
    return NextResponse.error()
  }
  const taskListID = taskList.id

  return NextResponse.json({
    id: dbCompetition.id,
    name: dbCompetition.name,
    description: dbCompetition.description,
    grade: fitIntoGrades(dbCompetition.grade),
    tasklist: taskListID,
    start: dbCompetition.start,
    end: dbCompetition.end,
    teams: teams
  });
}

export async function PUT(request: Request) {
  const competition: Competition = await request.json();

  const OriginalDBState = await prisma.competition.findFirst({where: {id: parseInt(competition.id) }, include: {teams: true, taskList: true} } );
  if (!OriginalDBState) { return NextResponse.error() }

  const teams : number[] = []
  for (const team of OriginalDBState.teams) {
    teams.push(team.id)
  }

  const newTeams : number[] = [];
  for (const team of competition.teams) {
    newTeams.push(team)
  }

  const taskList = OriginalDBState.taskList.at(0)

  if (!taskList) {
    return NextResponse.error()
  }
  const taskListID = taskList.id

  const comp = await prisma.competition.update({where: {id: parseInt(competition.id)}, data: {
      name: competition.name,
      description: competition.description,
      grade: 5,
      taskList: {
        connect: {id: parseInt(competition.tasklist)},
        disconnect: {id: parseInt(taskListID.toString())}
      },
      start: competition.start,
      end: competition.end,
  }})

  if(!comp) { return NextResponse.error() }

  // Disconnect all teams
  for (const team of teams) {
    await prisma.team.update({where: {id: parseInt(team.toString())}, data: { completions: { disconnect: { id: parseInt(comp.id.toString()) } } } });
  }
  // Connect new teams
  for (const newTeam of newTeams) {
    await prisma.team.update({where: {id: parseInt(newTeam.toString())}, data: { completions: { connect: { id: parseInt(comp.id.toString()) } } } } );
  }


  console.log("Competition", competition);
  return NextResponse.json(competition);
}

export async function DELETE(request: Request) {
  const id: Competition["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const comp = await prisma.competition.findFirst({ where: { id: parseInt(id)}, include: { teams: true, taskList: true } } )
  if (!comp) { return NextResponse.error() }

  //Unlink teams and tasklists
  const taskList = comp.taskList.at(0)
  if (!taskList) {
    return NextResponse.error()
  }
  const taskListID = taskList.id

  await prisma.taskList.update({where: {id: parseInt(taskListID.toString()) }, data: {completions: {disconnect: {id: parseInt(comp.id.toString())} } } } );

  const teams : number[] = [];
  for (const team of comp.teams) {
    teams.push(team.id)
  }

  for (const team of teams) {
    await prisma.team.update({ where: { id: parseInt(team.toString()) }, data: {completions: {disconnect: { id: parseInt(comp.toString()) } } } } );
  }

  // Delete comp.id

  await prisma.competition.delete({where: {id: parseInt(comp.id.toString())} } );

  console.log("Delete competition", id);
  return NextResponse.json({ id: parseInt(id) });
}
