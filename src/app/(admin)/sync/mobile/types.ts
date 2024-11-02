import { Prisma } from "@prisma/client";

export type BookMobile = {
  id: string;
  name: string;
  author: string;
  writer?: string | null;
  code: string;
  borrow: number;
  created_at: Date;
  updated_at: Date;
  remote_id?: string | null;
}

export type BookRemote = {
  id: string;
  name: string;
  author: string;
  writer?: string | null;
  code: string;
  borrow: boolean;
  edition?: string | null;
  createdAt: Date;
  updatedAt: Date;
  mobileId?: number | null;
}

export type CategoryMobile = {
  id: number;
  name: string;
  price?: number | null;
  quantity?: number | null;
  fixed_quantity: number;
  fixed_price: number;
  remote_id?: string | null;
}

export type CategoryRemote = {
  id: string;
  name: string;
  price: number | null;
  quantity: number | null;
  fixedQuantity: boolean;
  fixedPrice: boolean;
  createdAt: Date;
  updatedAt: Date;
  mobileId?: number | null;
}

export type InvoiceMobile = {
  id: string;
  date: Date;
  quantity: number;
  price: number;
  value: number;
  credit: number;
  payment_type: string;
  category_id: string;
  created_at: Date;
  updated_at: Date;
  remote_id?: string | null;
}

export type InvoiceRemote = {
  id: string;
  date: Date;
  quantity: number;
  price: Prisma.Decimal;
  value: Prisma.Decimal;
  credit: boolean;
  paymentType: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  mobileId?: number | null;
}

export type LendingMobile = {
  id: string;
  book_id: string;
  reader_id: string;
  date: Date;
  expected_date: Date;
  delivery_date?: Date | null;
  returned: number;
  remote_id?: string | null;
  created_at: Date;
  updated_at: Date;
}

export type LendingRemote = {
  id: string;
  bookId: string;
  readerId: string;
  date: Date;
  expectedDate: Date;
  deliveryDate?: Date | null;
  returned: boolean;
  createdAt: Date;
  updatedAt: Date;
  mobileId?: number | null;
}

export type ReaderMobile = {
  id: string;
  name: string;
  phone: string;
  address?: string | null;
  city?: string | null;
  email?: string | null;
  open_loan: number;
  remote_id?: string | null;
  updated_at: Date;
  created_at: Date;
}

export type ReaderRemote = {
  id: string;
  name: string;
  phone: string;
  address?: string | null;
  city?: string | null;
  email?: string | null;
  openLoan: boolean;
  createdAt: Date;
  updatedAt: Date;
  mobileId?: number | null;
}