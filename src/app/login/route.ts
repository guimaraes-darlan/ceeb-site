import { userLogin } from "../../repository/user/user.repository";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {

  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json({ msg: 'Dados inválidos' }, { status: 422 });
    }

    const user = await userLogin(email, password);


    return Response.json({ msg: 'ok', user });

  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
}