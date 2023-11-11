import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const team: Team = {
    id: parseInt(id),
    name: "Team 1",
    description: "Description 1",
  };

  return NextResponse.json(team);
}

export async function PUT(request: Request) {
  const team: Team = await request.json();

  console.log("Team", team);
  return NextResponse.json(team);
}

export async function DELETE(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete team", id);
  return NextResponse.json({ id: parseInt(id) });
}
