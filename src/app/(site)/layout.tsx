import LayoutPage from "../../components/layout-page";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
