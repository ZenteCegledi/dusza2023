import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id: User["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  const user: User = {
    id: parseInt(id),
    name: "John",
    role: "student" as Role.STUDENT,
    grade: 5,
    class: "A",
    username: "john",
    team: 1,
  };

  return NextResponse.json(user);
}

export async function PUT(request: Request) {
  const user: User = await request.json();

  switch (user.role) {
    case "student":
      console.log("Student", user);
      return NextResponse.json(user);
    case "teacher":
      console.log("Teacher", user);
      return NextResponse.json(user);
    case "jury":
      console.log("Jury", user);
      return NextResponse.json(user);
    default:
      return NextResponse.error();
  }
}

export async function DELETE(request: Request) {
  const id: User["id"] = request.url.slice(request.url.lastIndexOf("/") + 1);

  console.log("Delete user", id);
  return NextResponse.json({ id: parseInt(id) });
}