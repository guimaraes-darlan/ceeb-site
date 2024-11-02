import dayjs from "dayjs";
import LectureCalendarPage from "./lecture-calendar-page";
import { listLectureCalendar } from "../../../service/lectureCalendar/listLectureCalendar";
import { listAllSpeakers } from "../../../service/speaker/listAllSpeakers";

export const dynamic = "force-dynamic";

export default async function LectureCalendar() {
  const actualDate = dayjs();

  const month = actualDate.month();
  const year = actualDate.year();

  const response = await listLectureCalendar(month, year);
  const data = await response.json();

  const responseSpeakers = await listAllSpeakers();
  const speakers = await responseSpeakers.json();

  return <LectureCalendarPage lectures={data.data} speakers={speakers.data} />;
}
