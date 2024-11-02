import { auth } from "../../../../../auth";
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session) {
    return Response.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const month = searchParams.get('month');
  const year = searchParams.get('year');

  if (!month || !year) {
    return Response.json({ msg: 'Dados inválidos' }, { status: 500 });
  }


}