import { NextResponse } from "next/server";
import {createJWT, Login, ValidateJWT} from "@/app/utils/auth";

export async function POST(request: Request) {
    // Check JWT
    if (request.headers.has(process.env.JWT_COOKIE_NAME?? "jwt")) {

        const jwt = request.headers.get(process.env.JWT_COOKIE_NAME ?? "jwt")

        if (! jwt) { return new NextResponse(null, {status: 418, statusText: "Coffee?????"}) }

        if (await ValidateJWT(jwt)){ //Utálom a TS-t ezért)
            const resp = new NextResponse(null, {status: 200, statusText: "Login Success"})
            resp.cookies.set({
                name: "jwt",
                value: jwt,
                maxAge: 60*60*24,
                httpOnly: true,
                sameSite: "strict",
            });
        }
    }
    const cred : UserLogin = await request.json()
    if (!cred) {
        return new NextResponse(null, {status: 418, statusText: "Coffee?????"})
    }

    const id = await Login(cred.username, cred.password);
    if (!id) {
        return new NextResponse(null, {status: 418, statusText: "Coffee?????"})
    }

    const resp = new NextResponse(null, {status: 200, statusText: "Login Success"})
    resp.cookies.set({
        name: "jwt",
        value: await createJWT(id),
        maxAge: 60*60*24,
        httpOnly: true,
        sameSite: "strict",
    });
    return resp
}