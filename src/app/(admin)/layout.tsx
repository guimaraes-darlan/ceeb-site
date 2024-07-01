import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Menu } from "@mui/icons-material";
import Footer from "../../layout/Footer";
import NavbarAdmin from "../../layout/NavbarAdmin";
import { auth } from "../../../auth";
import Restricted from "./restricted";

const cookie = localFont({
  src: "../cookie.ttf",
  display: "swap",
});

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return (
      <html>
        <body>
          <Restricted />
        </body>
      </html>
    );
  }

  return (
    <html>
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

            <Container sx={{ display: { xs: "none", md: "flex" } }}></Container>
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
          <Box display="flex" flexDirection="row">
            <Box
              width={250}
              sx={{
                display: { xs: "none", md: "flex" },
                paddingTop: "1em",
                minHeight: "45rem",
              }}
            >
              <NavbarAdmin />
            </Box>
            <Container maxWidth="lg" sx={{ padding: "1rem" }}>
              {children}
            </Container>
          </Box>
        </Container>
        <Container sx={{ height: "1rem" }} />
        <Footer />
      </body>
    </html>
  );
}
