// @ts-ignore
import CryptoJS from 'crypto-js';
import prisma from "@/lib/db";

function encrypt(message: string) {
    return CryptoJS.AES.encrypt(message, process.env.JWT_KEY).toString();
}
function decrypt(message: string) {
    return CryptoJS.AES.decrypt(message, process.env.JWT_KEY).toString();
}

export async function Login(username: string, passwd: string) {
    const user = await prisma.user.findFirst({where: {username: username, password: passwd } } )
    if (!user) {
        return false
    }
    return user.id
}

export async function ValidateJWT(JWT: string | null) {
    if(!JWT) {return false}
    const key = await getIdFromJWT(JWT);
    const user = await prisma.user.findUnique({where: {id: key}})
    return !user;
}

export async function createJWT(id: number) : Promise<string> {
    return encrypt(id.toString())
}
export async function getIdFromJWT(jwt: string) {
    return parseInt(decrypt(jwt))
}

export async function GetPerms(request: Request) {
    console.log(JSON.stringify(request))
    const jwt = request.headers.get(process.env.JWT_COOKIE_NAME ?? "jwt")
    if (!jwt) {
        console.log("a")
        return false
    }
    if (!await ValidateJWT(jwt)) {
        console.log("b")
        return false
    }

    const userId = await getIdFromJWT(jwt ?? "");
    const user = await prisma.user.findUnique({ where: {id: userId } } );
    if (!user) {
        console.log("c")
        return false }
    return user.role as string
}

export async function UserPerms(jwt_key: string) {
    const userId = await getIdFromJWT(jwt_key);
    const user = await prisma.user.findUnique({ where: {id: userId } } );
    if (!user) { return false }
    return user.role as string
}