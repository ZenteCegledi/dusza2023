import {$Enums, PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;

export async function CreateUser(user: User, passwd: string){
    if (!user.password) {
        return false
    }

    switch (user.role) {
        case "student":
            if (!await prisma.user.create({
                data: {
                    name: user.name,
                    username: user.username,
                    password: passwd,
                    role: "USER",

                    student: {
                        create: {
                            grade: user.grade as number,
                            class: user.class,
                        }
                    }


                }
            })) {
                console.log("Failed to create User: ", user)
                return false;
            }
            break;
        case "teacher":
            console.log("Teacher", user);
            if (!await prisma.user.create({
                data: {
                    name: user.name,
                    username: user.username,
                    password: passwd,
                    role: "TEACHER",

                    teacher: {
                        create: {}
                    }
                }
            })) {
                console.log("Failed to create teacher: ", user)
                return false;
            }
            break;
        case "jury":
            console.log("Jury", user);
            if (!await prisma.user.create({
                data: {
                    name: user.name,
                    username: user.username,
                    password: passwd,
                    role: "JURY",

                    jury: {
                        create: {}
                    }
                }
            })) {
                console.log("Failed to create jury: ", user)
                return false;
            }
            break;
        default:
            return false;
    }
    return true
}

export async function UpdateUser(user: User) {
    // Validate existance
    const OriginalUserInDB = await prisma.user.findUnique({
        where: {
            id: user.id,
        }
    });
    if (!OriginalUserInDB){
        return false
    }

    if (user.password) {
        await UpdateUserPassword(user, user.password)
    }

    if (!CheckUserRoleMatch(user.role, OriginalUserInDB.role)) {
        await UpdateUserRole(user);
    }

    switch (user.role) {
        case "teacher":
            if (!await prisma.user.update({
                where: { id: user.id },
                data: {
                    name: user.name,
                    username: user.username,
                    teacher: {
                        update: {
                            // Teacher info for later
                        }
                    }
                }
            })) {
                return false;
            }
            break;
        case "student":
            if (!await prisma.user.update({
                where: {id: user.id},
                data: {
                    name: user.name,
                    username: user.username,
                    student: {
                        update: {
                            grade: user.grade,
                            class: user.class,
                            teamId: user.team
                        }
                    }
                }
            })) { return false; }
            break;
        case "jury":
            if (!await prisma.user.update({
                where: {id: user.id},
                data: {
                    name: user.name,
                    username: user.username,
                    jury: {
                        update: {

                        }
                    }
                }
            })) { return false }
            break;
    }

    return true
}

export async function UpdateUserPassword(user: User, password: string) {
    const OriginalUserInDB = await prisma.user.findUnique({
        where: {
            id: user.id,
        }
    });
    if (!OriginalUserInDB){
        return false
    }

    return !prisma.user.update({
        where: {id: user.id},
        data: {
            password: password
        }
    });

}

export async function UpdateUserRole(user: User) {
    const OriginalUserInDB = await prisma.user.findUnique({
        where: {
            id: user.id,
        }
    });
    if (!OriginalUserInDB){
        return false
    }

    switch (OriginalUserInDB.role){
        case "USER":
            await prisma.student.delete({
                where: {userId: user.id}
            })

            switch (user.role) {
                case "teacher":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            teacher: {
                                create: {

                                }
                            }
                        }
                    })
                    break;
                case "student":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            student: {
                                create: {
                                    grade: user.grade,
                                    class: user.class,
                                    teamId: user.team,
                                }
                            }
                        }
                    })
                    break;
                case "jury":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            jury: {
                                create: {

                                }
                            }
                        }
                    })
                    break;
            }
            break;
        case "TEACHER":
            switch (user.role) {
                case "teacher":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            teacher: {
                                create: {

                                }
                            }
                        }
                    })
                    break;
                case "student":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            student: {
                                create: {
                                    grade: user.grade,
                                    class: user.class,
                                    teamId: user.team,
                                }
                            }
                        }
                    })
                    break;
                case "jury":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            jury: {
                                create: {

                                }
                            }
                        }
                    })
                    break;
            }
            break;
        case "JURY":
            switch (user.role) {
                case "teacher":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            teacher: {
                                create: {

                                }
                            }
                        }
                    })
                    break;
                case "student":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            student: {
                                create: {
                                    grade: user.grade,
                                    class: user.class,
                                    teamId: user.team,
                                }
                            }
                        }
                    })
                    break;
                case "jury":
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {
                            jury: {
                                create: {

                                }
                            }
                        }
                    })
                    break;
            }
            break;
        case "WEBMASTER":
            console.log("Impossible action")
            return false
        default:
            break;

    }

}

export function CheckUserRoleMatch(roleA : Role, roleB: $Enums.Role) {
    switch (roleA) {
        case "student":
            if (roleB == "USER") {
                return true;
            }
            break;
        case "teacher":
            if (roleB == "TEACHER") {
                return true;
            }
            break;
        case "jury":
            if (roleB == "JURY") {
                return true;
            }
            break;

    }
    return false;
}

export async function DeleteUser(userId: number) {
    if (!await prisma.user.findFirst({ where: { id: userId } } )) {
        console.log("Could not find User with Id: ", userId, "id type:", typeof userId)
    }

    await prisma.user.delete( { where: { id: userId }, include: {student: true, jury: true, teacher: true} } )
    return true
}

export async function GetUsers() {
    const users : User[] = [];
    const DbUserData = await prisma.user.findMany({ include: { teacher: true, jury: true, student: true}});

    for (const dbUser of DbUserData) {
        switch (dbUser.role) {
            case "JURY":
               users.push({
                   id: dbUser.id,
                   name: dbUser.name,
                   username: dbUser.username,
                   role: "jury" as Role.JURY,
               })
                break;
            case "WEBMASTER":
                users.push({
                    id: dbUser.id,
                    name: dbUser.name,
                    username: dbUser.username,
                    role: "teacher" as Role.TEACHER,
                })
                break;
            case "USER":
                if (!dbUser.student) {
                    break;
                }
                users.push({
                    id: dbUser.id,
                    name: dbUser.name,
                    username: dbUser.username,
                    role: "student" as Role.STUDENT,
                    team: dbUser.student.teamId,
                    grade: dbUser.student.grade,
                    class: dbUser.student.class
                })
                break;
            case "TEACHER":
                users.push({
                    id: dbUser.id,
                    name: dbUser.name,
                    username: dbUser.username,
                    role: "teacher" as Role.TEACHER,
                })
                break;

        }
    }
    return users
}

export async function GetUser(id: number) {
    const user = await prisma.user.findUnique({
        where: {id: id},
        include: {student: true, jury: true, teacher: true}
    })

    if (!user) {
        return null;
    }

    switch (user.role) {
        case "JURY":
            return {
                id: id,
                name: user.name,
                username: user.username,
                role: Role.JURY,
            }
        case "WEBMASTER":
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                role: Role.TEACHER,
            }
        case "USER":
            if (!user.student) {
                break;
            }
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                role: Role.STUDENT,
                team: user.student.teamId,
                grade: user.student.grade,
                class: user.student.class
            }
        case "TEACHER":
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                role: Role.TEACHER,
            }
    }
    return null
}