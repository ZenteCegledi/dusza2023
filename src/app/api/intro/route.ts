import { NextResponse } from "next/server";

export async function GET() {
  const intro: Intro = {
    title: "Introduction",
    description: "This is the introduction",
  };

  return NextResponse.json(intro);
}

export async function PUT(request: Request) {
  const intro: Intro = await request.json();

  return NextResponse.json(intro);
}
