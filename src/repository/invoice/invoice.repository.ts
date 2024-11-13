import dayjs from 'dayjs';
import { InvoiceMobile } from '../../app/(admin)/sync/mobile/types';
import prisma from '../../lib/prisma';

export async function insertInvoiceMobile(invoice: InvoiceMobile) {
  return await prisma.invoice.create({
    data: {
      date: dayjs(invoice.date).toDate(),
      paymentType: invoice.payment_type,
      price: invoice.price,
      quantity: invoice.quantity,
      value: invoice.value,
      categoryId: invoice.category_id,
      credit: invoice.credit === 1,
    }
  });
}

export async function updateInvoiceMobile(invoice: InvoiceMobile) {
  return await prisma.invoice.update({
    where: { id: invoice.remote_id! },
    data: {
      date: dayjs(invoice.date).toDate(),
      paymentType: invoice.payment_type,
      price: invoice.price,
      quantity: invoice.quantity,
      value: invoice.value,
      categoryId: invoice.category_id,
      credit: invoice.credit === 1,
    }
  });
}

export async function listInvoicesToMobile(date: Date) {
  return await prisma.invoice.findMany({
    where: { updatedAt: { gte: date } },
  });
}

export async function getInvoice(id: string) {
  return await prisma.invoice.findFirst({ where: { id } });
}