import { auth } from "../../../../../../auth";
import prisma from '../../../../../lib/prisma';

export const GET = auth(async function GET(request: Request, ctx) {
  const id = ctx!.params!.id;
  try {
    const speaker = await prisma.speaker.findUnique({
      where: { id: id.toString() },
      select: {
        id: true,
        name: true,
        house: true,
      },
    });
    return Response.json({ msg: 'Success', data: speaker });
  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
});