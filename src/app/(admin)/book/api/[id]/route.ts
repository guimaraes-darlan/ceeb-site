import prisma from '../../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const book = await prisma.book.findFirst({ where: { id } });
  return Response.json({ data: book })
}