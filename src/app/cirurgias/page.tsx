import { Metadata } from "next";
import CirurgiasPage from "./cirurgias";

export const metadata: Metadata = {
  title: "Cirurgias Espirituais",
};

export default function Cirurgias() {
  return <CirurgiasPage />;
}
