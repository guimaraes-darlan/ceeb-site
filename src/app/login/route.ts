export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  console.log('aqui')
  return Response.json({ msg: 'ok' });
}