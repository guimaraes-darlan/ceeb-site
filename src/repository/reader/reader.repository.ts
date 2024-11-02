import { ReaderMobile } from '../../app/(admin)/sync/mobile/types';
import prisma from '../../lib/prisma';

export async function insertReaderMobile(reader: ReaderMobile) {
  return await prisma.reader.create({
    data: {
      name: reader.name,
      phone: reader.phone,
      email: reader.email,
      address: reader.address,
      city: reader.city,
      openLoan: reader.open_loan === 1,
    }
  });
}

export async function updateReaderMobile(reader: ReaderMobile) {
  return await prisma.reader.update({
    where: { id: reader.remote_id! },
    data: {
      name: reader.name,
      phone: reader.phone,
      email: reader.email,
      address: reader.address,
      city: reader.city,
      openLoan: reader.open_loan === 1,
    }
  });
}

export async function listReadersToMobile(date: Date) {
  return await prisma.reader.findMany({
    where: { updatedAt: { gte: date } }
  });
}

export async function getReader(id: string) {
  return await prisma.reader.findFirst({ where: { id } });
}