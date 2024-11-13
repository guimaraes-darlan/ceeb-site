import { auth } from '../../../../../../auth';
import prisma from '../../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {

  const session = await auth();
  if (!session) {
    return Response.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const id = params.id;
  const book = await prisma.book.findFirst({ where: { id } });
  return Response.json({ data: book });
}