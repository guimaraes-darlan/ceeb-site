import { CategoryMobile } from "../../app/(admin)/sync/mobile/types";
import prisma from '../../lib/prisma';

export const insertCategoryMobile = async (category: CategoryMobile) => {
  return await prisma.category.create({
    data: {
      name: category.name,
      price: category.price,
      quantity: category.quantity,
      fixedPrice: category.fixed_price === 1,
      fixedQuantity: category.fixed_quantity === 1,
    }
  });
}

export const updateCategoryMobile = async (category: CategoryMobile) => {
  return await prisma.category.update({
    where: { id: category.remote_id! },
    data: {
      name: category.name,
      price: category.price,
      quantity: category.quantity,
      fixedPrice: category.fixed_price === 1,
      fixedQuantity: category.fixed_quantity === 1,
    }
  });
}

export const listCategoriesToMobile = async (date: Date) => {
  return await prisma.category.findMany({
    where: {
      updatedAt: { gte: date },
    }
  });
}

export const getCategory = async (id: string) => {
  return await prisma.category.findFirst({ where: { id } })
}