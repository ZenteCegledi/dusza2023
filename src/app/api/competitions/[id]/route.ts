import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id: Competition["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const competition: Competition = {
    id: parseInt(id),
    name: "Competition 1",
    description: "Description 1",
    grade: 5,
    tasklist: 1,
    start: new Date(Date.now()),
    end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    teams: [1, 2, 3, 4],
  };

  return NextResponse.json(competition);
}

export async function PUT(request: Request) {
  const competition: Competition = await request.json();

  console.log("Competition", competition);
  return NextResponse.json(competition);
}

export async function DELETE(request: Request) {
  const id: Competition["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete competition", id);
  return NextResponse.json({ id: parseInt(id) });
}
