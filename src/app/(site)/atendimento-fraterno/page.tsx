import { Metadata } from "next";
import AtendimentoPage from "./atendimento";

export const metadata: Metadata = {
  title: "Atendimento Fraterno",
};

export default function Atendimento() {
  return <AtendimentoPage />;
}
