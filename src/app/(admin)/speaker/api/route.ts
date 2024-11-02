import { auth } from "../../../../../auth";
import prisma from "../../../../lib/prisma";

export const dynamic = 'force-dynamic';

export const GET = auth(async function GET(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page');

  const skip = page && +page ? (+page - 1) * 10 : 0;

  const speakers = await prisma.speaker.findMany({
    select: {
      id: true,
      name: true,
      house: true,
    },
    orderBy: {
      name: 'asc',
    },
    take: 10,
    skip,
  });

  return Response.json({ data: speakers });
});

export const POST = auth(async function POST(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const body = await request.json();
  try {

    const speaker = await prisma.speaker.create({
      data: {
        name: body.name,
        house: body.house,
      },
    });

    return Response.json({ msg: 'Success', data: speaker });
  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
});

export const PUT = auth(async function PUT(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const body = await request.json();
  try {
    const speaker = await prisma.speaker.update({
      where: { id: body.id },
      data: body,
    });
    return Response.json({ msg: 'Success', data: speaker });
  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
});