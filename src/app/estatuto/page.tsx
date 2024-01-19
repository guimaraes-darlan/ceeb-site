import { Metadata } from "next";
import EstatutoPage from "./estatuto";

export const metadata: Metadata = {
  title: "Estatuto",
  description: "Casa Espírita Eurípedes Barsanulpho",
};

export default function Estatuto() {
  return <EstatutoPage />;
}
