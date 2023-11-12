import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const settings: Settings = {
    name: "Random page",
    slogan: "Random slogan",
    icon: "https://www.google.com/favicon.ico",
  };

  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  const settings: Settings = await request.json();

  return NextResponse.json(settings);
}
