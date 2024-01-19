import Image from "next/image";
import { Box, Container, Divider, Typography } from "@mui/material";
import localFont from "next/font/local";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import "./global.css";

const cookie = localFont({
  src: "./cookie.ttf",
  display: "swap",
  variable: "--cookie",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Container sx={{ maxWidth: "900px" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="0.8rem"
            paddingBottom="0.8rem"
            sx={{
              backgroundColor: "#4169E1",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Container sx={{ width: "0.5em" }} />
            <Image
              src={"/images/euripedes.png"}
              alt="logo"
              width="60"
              height="100"
            />
            <Container sx={{ width: "0.5em" }} />
            <Box display="flex" alignItems="center" flexDirection="column">
              <Typography
                variant="h5"
                color="white"
                align="center"
                fontSize="xx-large"
                fontFamily="--cookie"
                className={cookie.className}
              >
                Casa Espírita Eurípedes Barsanulpho
              </Typography>
              <Typography fontSize="10" color="white">
                Amor e Caridade
              </Typography>
            </Box>
            <Navbar />
          </Box>
        </Container>
        <Container sx={{ maxWidth: "900px", minHeight: "60vh" }}>
          <Divider />
          {children}
        </Container>
        <Container sx={{ height: "1rem" }} />
        <Footer />
      </body>
    </html>
  );
}
