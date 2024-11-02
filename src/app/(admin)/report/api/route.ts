import dayjs from "dayjs";
import * as excel from 'exceljs';
import { auth } from "../../../../../auth";
import prisma from "../../../../lib/prisma";

type InvoiceType = {
  id: string,
  date: Date,
  quantity: number,
  price: number,
  value: number,
  payment_type: string;
  name: string;
}

export const GET = auth(async function GET(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const { searchParams } = new URL(request.url)
  const paramMonth = searchParams.get('month');
  const paramYear = searchParams.get('year');

  const actualDate = dayjs();

  const year = paramYear ? +paramYear : actualDate.year();
  const month = (paramMonth ? +paramMonth : actualDate.month()) + 1;

  const rows: InvoiceType[] = await prisma.$queryRawUnsafe(`select i.id, i.date, i.quantity, i.price, i.value, i.payment_type, c.name
    from invoices i
    inner join categories c on c.id=i.category_id
    where date_part('year', lc.date) = ${year} and date_part('month', lc.date) = ${month}
    order by i.date asc`);

  const file = await generateExcel(rows);


  return Response.json({ data: "" });
});

async function generateExcel(invoices: InvoiceType[]) {
  const workbook = new excel.Workbook();
  const sheet = workbook.addWorksheet('Contas');

  sheet.columns = [
    { header: 'Data', key: 'date', },
    { header: 'Categoria', key: 'name', },
    { header: 'Quantidade', key: 'quantity', },
    { header: 'Preço', key: 'price', },
    { header: 'Total', key: 'value', },
    { header: 'Tipo de Pagamento', key: 'payment_type', },
  ];

  for (const invoice of invoices) {
    sheet.addRow({
      ...invoice,
      date: dayjs(invoice.date).format('DD/MM/YYYY')
    });
  }

  return await workbook.xlsx.writeBuffer();
}