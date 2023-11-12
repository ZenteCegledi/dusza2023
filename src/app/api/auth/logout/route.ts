import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const resp = new NextResponse(null, {status: 200})
    resp.cookies.delete({
        name: process.env.JWT_COOKIE_NAME?? "jwt",
    })
    return resp
}