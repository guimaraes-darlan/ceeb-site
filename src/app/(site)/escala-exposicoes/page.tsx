import { Metadata } from "next";
import EscalaPage from "./escala";

export const metadata: Metadata = {
  title: "Escala de Exposições Doutrinárias",
};

export default function Escala() {
  return <EscalaPage />;
}
