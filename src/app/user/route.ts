import { z } from "zod";
import { parseErrors } from "../../util/errors";
import { saveUser } from "../../repository/user/user.repository";
import { auth } from "../../../auth";

export const dynamic = 'force-dynamic';

const schema = z.object({
  name: z
    .string({ message: 'Nome deve ser um texto' })
    .min(1, { message: 'Nome é obrigatório' }),
  email: z
    .string({ message: 'Email deve ser um texto' })
    .email({ message: 'Email inválido' })
    .min(1, { message: 'Email é obrigatório' }),
  username: z.
    string({ message: 'Nome de usuário deve ser um texto' })
    .min(1, { message: 'Nome de usuário é obrigatório' }),
  password: z
    .string({ message: 'Senha deve ser um texto' })
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
});

export async function POST(request: Request) {
  // const session = await auth();
  // if (!session) {
  //   return Response.json({ message: 'Não autenticado' }, { status: 401 });
  // }

  try {
    const body = await request.json();
    const data = schema.safeParse(body);

    if (!data.success) {
      const { errors } = data.error;
      const messages = parseErrors(errors);
      return Response.json({ errors: messages }, { status: 422 });
    }

    await saveUser(data.data);
    return Response.json({ msg: "Dados cadastrados com sucesso" });

  } catch (error) {
    return Response.json({ msg: 'Não foi possível completar a operação', error }, { status: 500 });
  }
}