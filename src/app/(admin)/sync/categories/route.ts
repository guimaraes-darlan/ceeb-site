import { CategoryRemote } from "../mobile/types";
import { getCategory, insertCategoryMobile, listCategoriesToMobile, updateCategoryMobile } from "../../../../repository/category/category.repository";
import { validateToken } from '../util/validateToken';

export async function GET(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const paramDate = searchParams.get('date');
  const date = new Date(paramDate!.toString());

  const categories = await listCategoriesToMobile(date);

  return Response.json({ data: categories });
}

export async function POST(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const body = await request.json();
  const categories = body;

  let created = 0;
  let updated = 0;
  const registers = [];

  for (const data of categories) {
    const category = JSON.parse(data);
    if (category.remote_id) {
      const categoryRemote = await getCategory(category.remote_id);
      if (categoryRemote) {
        const register: CategoryRemote = await updateCategoryMobile(category);
        register.mobileId = category.id;
        registers.push(register);
        updated++;
      } else {
        const register: CategoryRemote = await insertCategoryMobile(category);
        register.mobileId = category.id;
        registers.push(register);
        created++;
      }
    } else {
      const register: CategoryRemote = await insertCategoryMobile(category);
      register.mobileId = category.id;
      registers.push(register);
      created++;
    }
  }
  return Response.json({ created, updated, data: registers });
}