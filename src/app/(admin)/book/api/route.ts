
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page');
  const name = searchParams.get('name');

  const book = await prisma.book.findMany();
  return Response.json({ data: book })
}