import { Metadata } from "next";
import BibliotecaPage from "./biblioteca";

export const metadata: Metadata = {
  title: "Biblioteca",
};

export default function Biblioteca() {
  return <BibliotecaPage />;
}
