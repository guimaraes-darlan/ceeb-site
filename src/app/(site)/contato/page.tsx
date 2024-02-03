import { Metadata } from "next";
import ContatoPage from "./contato";

export const metadata: Metadata = {
  title: "Contato",
};

export default function Contato() {
  return <ContatoPage />;
}
