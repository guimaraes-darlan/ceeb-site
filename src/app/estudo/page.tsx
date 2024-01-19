import { Metadata } from "next";
import EstudoPage from "./estudo";

export const metadata: Metadata = {
  title: "Estudo da Doutrina Espírita",
};

export default function Estudo() {
  return <EstudoPage />;
}
