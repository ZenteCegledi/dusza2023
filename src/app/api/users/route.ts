import { NextResponse } from "next/server";
import {CreateUser, GetUsers} from "@/lib/db";

export async function GET() {
  const users = await GetUsers()
  if (!users) {
    return NextResponse.error()
  }

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const user: User = await request.json();
  if (!user.password){
    return NextResponse.error()
  }

  await CreateUser(user, user.password)
  return NextResponse.json(user);
}
