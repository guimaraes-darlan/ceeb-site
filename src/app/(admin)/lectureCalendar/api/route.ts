import dayjs from "dayjs";
import { auth } from "../../../../../auth";
import prisma from "../../../../lib/prisma";
import { LectureCalendarsModel } from "../../../../models/lectureCalendar";

type ResponseType = {
  id: string,
  date: Date,
  speaker_id: string,
  name: string,
  house: string,
}

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const paramMonth = searchParams.get('month');
  const paramYear = searchParams.get('year');

  const actualDate = dayjs();

  const year = paramYear ? +paramYear : actualDate.year();
  const month = (paramMonth ? +paramMonth : actualDate.month()) + 1;

  const rows: ResponseType[] = await prisma.$queryRawUnsafe(`select lc.id, lc.date, s.id as speaker_id, s.name, s.house
    from lecture_calendar lc
    join speakers s on s.id = lc.speaker_id
    where date_part('year', lc.date) = ${year} and date_part('month', lc.date) = ${month}
    order by lc.date asc`);

  const data: LectureCalendarsModel = rows.map((item) => {
    return {
      id: item.id,
      date: item.date,
      speakerId: item.speaker_id,
      speaker: {
        id: item.speaker_id,
        name: item.name,
        house: item.house,
      }
    }
  });


  return Response.json({ data });
};

export const POST = auth(async function POST(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const body = await request.json();
  try {
    const lectureCalendar = await prisma.lectureCalendar.create({
      data: {
        date: body.date,
        speakerId: body.speakerId,
      }
    });
    return Response.json({ msg: 'Success', data: lectureCalendar });
  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
});

export const PUT = auth(async function PUT(request) {
  if (!request.auth) Response.json({ message: 'Not authenticated' }, { status: 401 });

  const body = await request.json();
  try {
    const lectureCalendar = await prisma.lectureCalendar.update({
      where: { id: body.id },
      data: body,
    });
    return Response.json({ msg: 'Success', data: lectureCalendar });
  } catch (error) {
    console.log(error)
    return Response.json({ msg: error }, { status: 500 });
  }
});