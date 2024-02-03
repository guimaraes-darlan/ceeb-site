import { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "CEEB",
  description: "Casa Espírita Eurípedes Barsanulpho",
};

export default function Page() {
  return <HomePage />;
}
