import { getReader, insertReaderMobile, listReadersToMobile, updateReaderMobile } from "../../../../repository/reader/reader.repository";
import { ReaderMobile, ReaderRemote } from "../mobile/types";
import { validateToken } from "../util/validateToken";

export async function GET(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const paramDate = searchParams.get('date');
  const date = new Date(paramDate!.toString());

  const readers = await listReadersToMobile(date);

  return Response.json({ data: readers });
}

export async function POST(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const body = await request.json();
  const readers = body;

  let created = 0;
  let updated = 0;
  const registers = [];

  for (const data of readers) {
    const reader = JSON.parse(data);
    if (reader.remote_id) {
      const readerRemote = await getReader(reader.remote_id);
      if (readerRemote) {
        const register: ReaderRemote = await updateReaderMobile(reader);
        register.mobileId = reader.id;
        registers.push(register);
        updated++;
      } else {
        const register: ReaderRemote = await insertReaderMobile(reader);
        register.mobileId = reader.id;
        registers.push(register);
        created++;
      }
    } else {
      const register: ReaderRemote = await insertReaderMobile(reader);
      register.mobileId = reader.id;
      registers.push(register);
      created++;
    }
  }

  return Response.json({ created, updated, data: registers });
}