import prisma from "@/lib/db";

export default async function Index() {
    return (
        <>
            <p>
                { JSON.stringify(await prisma.words.findMany()) }
            </p>
        </>
    );
}