import { getBook, insertBookMobile, listBooksToMobile, updateBookMobile } from "../../../../repository/book/book.repository";
import { BookRemote } from "../mobile/types";
import { validateToken } from "../util/validateToken";

export async function GET(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const paramDate = searchParams.get('date');
  const date = new Date(paramDate!.toString());

  const books = await listBooksToMobile(date);

  return Response.json({ data: books });
}

export async function POST(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const body = await request.json();
  const books = body;

  let created = 0;
  let updated = 0;
  const registers = [];

  for (const data of books) {
    const book = JSON.parse(data);
    if (book.remote_id) {
      const bookRemote = await getBook(book.remote_id);
      if (bookRemote) {
        const register: BookRemote = await updateBookMobile(book);
        register.mobileId = book.id;
        registers.push(register);
        updated++;
      } else {
        const register: BookRemote = await insertBookMobile(book);
        register.mobileId = book.id;
        registers.push(register);
        created++;
      }
    } else {
      const register: BookRemote = await insertBookMobile(book);
      register.mobileId = book.id;
      registers.push(register);
      created++;
    }
  }

  return Response.json({ created, updated, data: registers });
}