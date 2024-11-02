import prisma from '../../lib/prisma';
import * as bcrypt from 'bcrypt';
import { UserModel } from '../../models/user';

export const userLogin = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      username: true,
    }
  });

  if (!user) {
    throw new Error('Usuário e/ou senha inválidos');
  }

  const doMatchPassword = await bcrypt.compare(password, user.password);

  if (!doMatchPassword) {
    throw new Error('Usuário e/ou senha inválidos');
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
  };
}

export const saveUser = async (user: UserModel) => {
  const hash = await bcrypt.hash(user.password, 8);
  try {
    await prisma.user.create({
      data: {
        ...user,
        password: hash,
      }
    });
  } catch (error) {
    throw new Error('Erro ao salvar o usuário');
  }
}