import Image from "next/image";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import localFont from "next/font/local";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import "../global.css";
import { Menu } from "@mui/icons-material";

const cookie = localFont({
  src: "../cookie.ttf",
  display: "swap",
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
                lineHeight="0.8"
              >
                <span className={cookie.className}>
                  Casa Espírita Eurípedes Barsanulpho
                </span>
              </Typography>
              <Typography fontSize="10" color="white">
                Amor e Caridade
              </Typography>
            </Box>
            <Container sx={{ display: { xs: "none", md: "flex" } }}>
              <Navbar />
            </Container>
            <Container
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                startIcon={<Menu />}
                sx={{ color: "white" }}
              >
                Menu
              </Button>
            </Container>
          </Box>
        </Container>
        <Container sx={{ maxWidth: "900px", minHeight: "70vh" }}>
          <Divider />
          {children}
        </Container>
        <Container sx={{ height: "1rem" }} />
        <Footer />
      </body>
    </html>
  );
}
