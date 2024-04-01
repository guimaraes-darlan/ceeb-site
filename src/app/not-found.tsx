"use client";

import { Box, Button, Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CEEB",
};

export default function NotFound() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ marginTop: "5em" }}
    >
      <Typography variant="h5">Página não encontrada!</Typography>
      <Link href="/">
        <Button>Voltar para página principal</Button>
      </Link>
    </Box>
  );
}
