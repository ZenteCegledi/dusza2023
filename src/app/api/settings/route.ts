import {NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const settings: Settings = {
    name: "Random page",
    description: "Random description",
    slogan: "Random slogan",
    icon: "https://www.google.com/favicon.ico",
  };

  const result = await prisma.siteSettings.findFirst()
  if (!result) { // No SiteSetting yet, init
    return NextResponse.json(await prisma.siteSettings.create({
     data: {
       name: "Random page",
       descriprion: "Random description",
       slogan: "Random slogan",
       icon: "https://www.google.com/favicon.ico",
     }
   }));
  }

  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  const settings: Settings = await request.json();

  if (!settings) {
    return NextResponse.error()
  }

  await prisma.siteSettings.update({
    where: { id: 0},
    data: {
      name: settings.name,
      descriprion: settings.description,
      slogan: settings.slogan,
      icon: settings.icon
    }
  })

  return NextResponse.json(settings);
}
