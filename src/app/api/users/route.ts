import { NextResponse } from "next/server";

export async function GET() {
  const students: User[] = [
    { id: 1, name: "John", role: "student" as Role.STUDENT, grade: 5, class: "A" },
    { id: 2, name: "Jane", role: "student" as Role.STUDENT, grade: 5, class: "A" },
    { id: 3, name: "Mr. Teacher", role: "teacher" as Role.TEACHER },
    { id: 4, name: "Mrs. Jury", role: "jury" as Role.JURY },
  ];

  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const user: Omit<User, "id"> = await request.json();

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
