import { getInvoice, insertInvoiceMobile, listInvoicesToMobile, updateInvoiceMobile } from "../../../../repository/invoice/invoice.repository";
import { InvoiceMobile, InvoiceRemote } from "../mobile/types";
import { validateToken } from "../util/validateToken";

export async function GET(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const paramDate = searchParams.get('date');
  const date = new Date(paramDate!.toString());

  const invoices = await listInvoicesToMobile(date);

  return Response.json({
    data: invoices.map(i => {
      return {
        ...i,
        price: i.price.toNumber(),
        value: i.value.toNumber(),
      }
    })
  });
}

export async function POST(request: Request) {
  const validRequest = validateToken(request);
  if (!validRequest) {
    return Response.json({ msg: 'Restricted area' }, { status: 401 });
  }

  const body = await request.json();
  const invoices = body;

  let created = 0;
  let updated = 0;
  const registers = [];

  for (const data of invoices) {
    const invoice = JSON.parse(data);
    if (invoice.remote_id) {
      const invoiceRemote = await getInvoice(invoice.remote_id);
      if (invoiceRemote) {
        const register: InvoiceRemote = await updateInvoiceMobile(invoice);
        register.mobileId = invoice.id;
        registers.push(register);
        updated++;
      } else {
        const register: InvoiceRemote = await insertInvoiceMobile(invoice);
        register.mobileId = invoice.id;
        registers.push(register);
        created++;
      }
    } else {
      const register: InvoiceRemote = await insertInvoiceMobile(invoice);
      register.mobileId = invoice.id;
      registers.push(register);
      created++;
    }
  }

  return Response.json({ created, updated, data: registers });
}