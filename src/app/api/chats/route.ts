import { prisma } from "@/app/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const body = await request.json()
  const chatCreated = await prisma.chat.create({
    data: {
      message: body.message
    },
    select: {
      id: true
    }
  })

  return NextResponse.json(chatCreated)
}

export async function GET(_request: NextRequest) {
  const chats = await prisma.chat.findMany()
  return NextResponse.json(chats)
}