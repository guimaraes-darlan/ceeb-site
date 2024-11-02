import { Metadata } from "next";
import EscalaPage from "./escala";
import dayjs from "dayjs";
import { listLectureCalendar } from "../../../service/lectureCalendar/listLectureCalendar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Escala de Exposições Doutrinárias",
};

export default async function Escala() {
  const actualDate = dayjs();

  const month = actualDate.month();
  const year = actualDate.year();

  const response = await listLectureCalendar(month, year);
  const data = await response.json();
  return <EscalaPage lectures={data.data} />;
}
