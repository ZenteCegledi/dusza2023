const { NextResponse } = require('next/server');

export async function GET() {
  const currentCompetitions: Competition[] = [
    { id: 1, name: "Competition 1", description: "Description 1", grade: 5, tasklist: 1, start: new Date(), end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), teams: [1, 2, 3, 4] },
    { id: 2, name: "Competition 2", description: "Description 2", grade: 5, tasklist: 1, start: new Date(), end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), teams: [1, 2, 3, 4] },
    { id: 3, name: "Competition 3", description: "Description 3", grade: 5, tasklist: 1, start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), teams: [1, 2, 3, 4] },
    { id: 4, name: "Competition 4", description: "Description 4", grade: 5, tasklist: 1, start: new Date(), end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), teams: [1, 2, 3, 4] },
  ]

  return NextResponse.json(currentCompetitions);
}
