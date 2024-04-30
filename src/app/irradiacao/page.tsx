import { Metadata } from "next";
import IrradiacaoPage from "./irradiacao-page";

export const metadata: Metadata = {
  title: "Irradiação",
};

export default function Irradiacao() {
  return <IrradiacaoPage />;
}
