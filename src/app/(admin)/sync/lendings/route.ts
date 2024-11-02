import { getLending, insertLendingMobile, listLendingToMobile, updateLendingMobile } from "../../../../repository/lending/lending.repository";
import { LendingMobile, LendingRemote } from "../mobile/types";
import { validateToken } from "../util/validateToken";

export async function GET(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const paramDate = searchParams.get('date');
  const date = new Date(paramDate!.toString());

  const lendings = await listLendingToMobile(date);

  return Response.json({ data: lendings });
}

export async function POST(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const body = await request.json();
  const lendings = body;

  let created = 0;
  let updated = 0;
  const registers = [];

  for (const data of lendings) {
    const lending = JSON.parse(data);
    if (lending.remote_id) {
      const lendingRemote = await getLending(lending.remote_id);
      if (lendingRemote) {
        const register: LendingRemote = await updateLendingMobile(lending);
        register.mobileId = lending.id;
        registers.push(register);
        updated++;
      } else {
        const register: LendingRemote = await insertLendingMobile(lending);
        register.mobileId = lending.id;
        registers.push(register);
        created++;
      }
    } else {
      const register: LendingRemote = await insertLendingMobile(lending);
      register.mobileId = lending.id;
      registers.push(register);
      created++;
    }
  }

  return Response.json({ created, updated, data: registers });
}