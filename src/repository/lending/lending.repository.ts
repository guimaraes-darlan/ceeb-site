import { LendingMobile } from "../../app/(admin)/sync/mobile/types";
import prisma from '../../lib/prisma';

export async function insertLendingMobile(lending: LendingMobile) {
  return await prisma.lending.create({
    data: {
      date: lending.date,
      expectedDate: lending.expected_date,
      bookId: lending.book_id,
      readerId: lending.reader_id,
      deliveryDate: lending.delivery_date,
      returned: lending.returned === 1,
    }
  });
}

export async function updateLendingMobile(lending: LendingMobile) {
  return await prisma.lending.update({
    where: { id: lending.remote_id! },
    data: {
      date: lending.date,
      expectedDate: lending.expected_date,
      bookId: lending.book_id,
      readerId: lending.reader_id,
      deliveryDate: lending.delivery_date,
      returned: lending.returned === 1,
    }
  });
}

export async function listLendingToMobile(date: Date) {
  return await prisma.lending.findMany({
    where: { updatedAt: { gte: date } }
  });
}

export async function getLending(id: string) {
  return await prisma.lending.findFirst({ where: { id } });
}