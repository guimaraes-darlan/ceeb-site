import { BookMobile } from "../../app/(admin)/sync/mobile/types";
import prisma from '../../lib/prisma';

export async function insertBookMobile(book: BookMobile) {
  return await prisma.book.create({
    data: {
      name: book.name,
      author: book.author,
      code: book.code,
      borrow: book.borrow === 1,
      writer: book.writer,
    }
  });
}

export async function updateBookMobile(book: BookMobile) {
  return await prisma.book.update({
    where: { id: book.remote_id! },
    data: {
      name: book.name,
      author: book.author,
      code: book.code,
      borrow: book.borrow === 1,
      writer: book.writer,
    }
  });
}

export async function listBooksToMobile(date: Date) {
  return await prisma.book.findMany({
    where: {
      updatedAt: { gte: date },
    }
  });
}

export async function getBook(id: string) {
  return await prisma.book.findFirst({ where: { id } });
}