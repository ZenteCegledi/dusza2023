import { NextResponse } from "next/server";
import {DeleteUser, GetUser, UpdateUser} from "@/lib/db";

export async function GET(request: Request) {
  const id: User["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const user = await GetUser(id);

  return NextResponse.json(user);
}

export async function PUT(request: Request) {
  const user: User = await request.json();
  await UpdateUser(user);
}

export async function DELETE(request: Request) {
  const id: User["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete user", id);

  await DeleteUser(id)

  return NextResponse.json({ id: parseInt(id) });
}