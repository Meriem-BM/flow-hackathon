import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { PlayerSchema } from "@/validation/player.schema";

export async function PATCH(req: NextRequest, res: NextResponse) {
    const { firstname, lastname, goal, salary, devise, pictureURL } = PlayerSchema.parse(await req.json());
    const player = await prisma.player.update({
      where: { id: Number() },
      data: {
        firstname,
        lastname,
        goal,
        salary,
        devise,
      },
    });
    return NextResponse.json(player)
}