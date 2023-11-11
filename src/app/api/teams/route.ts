import { NextResponse } from "next/server";

export async function GET() {
  const teams: Team[] = [
    { id: 1, name: "Team 1", description: "Description 1" },
    { id: 2, name: "Team 2", description: "Description 2" },
    { id: 3, name: "Team 3", description: "Description 3" },
    { id: 4, name: "Team 4", description: "Description 4" },
  ]

  return NextResponse.json(teams);
}

export async function POST(request: Request) {
  const team: Team = await request.json();

  console.log("Team", team);
  return NextResponse.json(team);
}
