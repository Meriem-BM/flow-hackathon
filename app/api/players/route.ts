import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

import { PlayerSchema } from "@/validation/player.schema";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, goal, salary, devise, pictureURL } =
      PlayerSchema.parse(await req.json());

    console.log(firstname, lastname, goal, salary, devise, pictureURL);

    const playerExists = await prisma.player.findFirst({
      where: {
        firstname,
        lastname,
      },
    });

    if (playerExists) {
      return NextResponse.json({
        body: `Player ${firstname} ${lastname} already exists`,
      });
    }

    const player = await prisma.player.create({
      data: {
        firstname,
        lastname,
        goal,
        salary,
        devise,
      },
    });

    return NextResponse.json(player);
  } catch (error) {
    return NextResponse.json({
      body: error,
      status: 400,
    });
  }
}

export async function GET(req: NextRequest) {
  try {    
    const page = req.nextUrl.searchParams.get("page") || 1;
    const limit = req.nextUrl.searchParams.get("limit") || 10;

    const players = await prisma.player.findMany({
      skip: (+page - 1) * +limit,
      take: +limit,
    });

    return NextResponse.json(players);
  } catch (error) {
    console.log(error);
    
    return new Response("Bad request", {
      status: 400,
    })
  }
}
