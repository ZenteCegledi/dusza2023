import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const id: SubmitResult["id"] = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

  const competition: SubmitResult = {
    id: parseInt(id),
    competition: 1,
    correctNumber: 0,
    wrongNumber: 0,
    team: 1,
    date: new Date(),
    solutions: ['word1', 'word2', 'word3', 'word4'],
  };

  return NextResponse.json(competition);
}
