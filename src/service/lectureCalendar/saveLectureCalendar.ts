import { LectureCalendarModel } from "../../models/lectureCalendar";

export const saveLectureCalendar = async (lectureCalendar: LectureCalendarModel, method: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}lectureCalendar/api`, {
    body: JSON.stringify(lectureCalendar),
    method,
    headers: { 'Content-Type': 'application/json' },
  });
}