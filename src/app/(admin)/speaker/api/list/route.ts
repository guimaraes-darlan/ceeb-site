import { auth } from "../../../../../../auth";
import prisma from "../../../../../lib/prisma";

export const dynamic = 'force-dynamic';

export const GET = auth(async function GET(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const speakers = await prisma.speaker.findMany({
    select: {
      id: true,
      name: true,
      house: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  return Response.json({ data: speakers });
});