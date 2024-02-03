import { Metadata } from "next";
import DesobsessaoPage from "./desobsessao";

export const metadata: Metadata = {
  title: "Tratamento de Desobsessão",
};

export default function Desobsessao() {
  return <DesobsessaoPage />;
}
