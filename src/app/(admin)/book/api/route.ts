
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page');
  const name = searchParams.get('name');

  const skip = page && +page ? (+page - 1) * 10 : 0;
  const where = !name ? '' : ` where name ilike '%${name}%'`;

  const books = await prisma.$queryRawUnsafe(`
    select id, name, author, writer, code, edition, borrow
    from books
    ${where}
    order by name desc
    limit 10
    offset ${skip}
  `);
  return Response.json({ data: books })
}