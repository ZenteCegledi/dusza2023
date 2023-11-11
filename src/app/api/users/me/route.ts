import { NextResponse } from 'next/server';

export async function GET() {
  const me: User = {
    id: 1,
    name: "John Doe",
    username: "john",
    role: "student" as Role.STUDENT,
    grade: 5,
    class: "A",
    team: 1,
  };

  return NextResponse.json(me);
}
