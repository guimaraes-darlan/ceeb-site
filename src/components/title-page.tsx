"use client";

import { Container, Divider, Typography } from "@mui/material";
import { Cookie } from "next/font/google";

const cookie = Cookie({ subsets: ["latin"], weight: "400" });

export default function TitlePage({ title }: { title: string }) {
  return (
    <>
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
        <Divider />
      </Container>
      <Container sx={{ height: "1rem" }} />
    </>
  );
}
