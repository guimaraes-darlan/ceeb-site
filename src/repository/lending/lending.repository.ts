import dayjs from "dayjs";
import { LendingMobile } from "../../app/(admin)/sync/mobile/types";
import prisma from '../../lib/prisma';

export async function insertLendingMobile(lending: LendingMobile) {
  return await prisma.lending.create({
    data: {
      date: dayjs(lending.date).toDate(),
      expectedDate: dayjs(lending.expected_date).toDate(),
      bookId: lending.book_id,
      readerId: lending.reader_id,
      deliveryDate: lending.delivery_date ? dayjs(lending.delivery_date).toDate() : null,
      returned: lending.returned === 1,
    }
  });
}

export async function updateLendingMobile(lending: LendingMobile) {
  return await prisma.lending.update({
    where: { id: lending.remote_id! },
    data: {
      date: dayjs(lending.date).toDate(),
      expectedDate: dayjs(lending.expected_date).toDate(),
      bookId: lending.book_id,
      readerId: lending.reader_id,
      deliveryDate: lending.delivery_date ? dayjs(lending.delivery_date).toDate() : null,
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