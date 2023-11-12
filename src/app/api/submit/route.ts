import { NextResponse } from 'next/server';

export async function GET() {
  const results: SubmitResult[] = [
    {
      id: 1,
      competition: 1,
      correctNumber: 0,
      wrongNumber: 0,
      team: 1,
      date: new Date(),
      solutions: ['word1', 'word2', 'word3', 'word4'],
    },
    {
      id: 2,
      competition: 2,
      correctNumber: 0,
      wrongNumber: 0,
      team: 1,
      date: new Date(),
      solutions: ['word1', 'word2', 'word3', 'word4'],
    },
    {
      id: 3,
      competition: 3,
      correctNumber: 0,
      wrongNumber: 0,
      team: 1,
      date: new Date(),
      solutions: ['word1', 'word2', 'word3', 'word4'],
    },
    {
      id: 4,
      competition: 4,
      correctNumber: 0,
      wrongNumber: 0,
      team: 1,
      date: new Date(),
      solutions: ['word1', 'word2', 'word3', 'word4'],
    },
  ];

  return NextResponse.json(results);
}

export async function POST(request: Request) {
  const submitableCompetition: SubmitInput = await request.json();

  console.log('Competition', submitableCompetition);

  const submitResult: SubmitResult = {
    ...submitableCompetition,
    id: 1,
    correctNumber: 0,
    wrongNumber: 0,
    team: 1,
    date: new Date(),
  };

  return NextResponse.json(submitResult);
}
