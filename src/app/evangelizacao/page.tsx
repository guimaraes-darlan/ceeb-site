import { Metadata } from "next";
import EvangelizacaoPage from "./evangelizacao";

export const metadata: Metadata = {
  title: "Evangelização",
};

export default function Evangelizacao() {
  return <EvangelizacaoPage />;
}
