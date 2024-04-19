import { Metadata } from "next";
import CampanhasPage from "./campanhas";

export const metadata: Metadata = {
  title: "Campanhas",
};

export default function Campanhas() {
  return <CampanhasPage />;
}
