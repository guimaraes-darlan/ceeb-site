"use client";

import { Button, Container, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Restricted() {
  return (
    <Container>
      <Typography variant="h4">Área restrita</Typography>
      <Typography variant="h6">
        Clique no botão abaixo para realizar o login
      </Typography>
      <Button variant="outlined" onClick={() => signIn()}>
        Entrar
      </Button>
    </Container>
  );
}
