import { ReactElement } from "react";
import Head from "next/head";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Cookie } from "next/font/google";
const cookie = Cookie({ subsets: ["latin"], weight: "400" });

export interface LayoutProps {
  children: ReactElement;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Casa Espírita Eurípedes Barsanulpho</title>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Container sx={{ maxWidth: "900px" }}>
        <Box
          display="flex"
          // flexDirection="row"
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
              className={cookie.className}
              fontSize="xx-large"
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
      <Container
        sx={{
          paddingBottom: "1rem",
          paddingTop: "0.5rem",
          maxWidth: "900px",
        }}
      >
        <Typography
          fontSize="xxx-large"
          fontWeight="bold"
          className={cookie.className}
          color="gray"
        >
          {title}
        </Typography>
      </Container>
      <Container sx={{ maxWidth: "900px", minHeight: "60vh" }}>
        <Divider />
        {children}
      </Container>
      <Container sx={{ height: "1rem" }} />
      <Footer />
    </>
  );
}
