import { userLogin } from "../../repository/user/user.repository";
import jwt from 'jsonwebtoken';

type UserType = {
  id: string;
  name: string;
  email: string;
  username: string;
}

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {

  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json({ msg: 'Dados inválidos' }, { status: 422 });
    }

    const user: UserType = await userLogin(email, password);
    const token = generateToken(user);

    // console.log(jwt.verify(token, process.env.JWT_SECRET || 'pass'))

    return Response.json({ msg: 'ok', user, token });

  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
}

function generateToken(user: UserType) {
  const token = jwt.sign(user, process.env.JWT_SECRET || 'pass', { expiresIn: '1d' });
  return token;
}