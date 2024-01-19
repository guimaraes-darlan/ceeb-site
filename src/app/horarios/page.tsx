import { Metadata } from "next";
import HorariosPage from "./horarios";

export const metadata: Metadata = {
  title: "Horários",
};

export default function Horarios() {
  return <HorariosPage />;
}
