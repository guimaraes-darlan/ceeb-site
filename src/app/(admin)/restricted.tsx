"use client";

import { Button, Grid, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Restricted() {
  return (
    <Grid
      spacing={2}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} alignItems="center">
        <Typography variant="h4" color="red">
          Área restrita
        </Typography>
      </Grid>
      <Grid item xs={12} alignItems="center">
        <Typography variant="h6">
          Clique no botão abaixo para realizar o login
        </Typography>
      </Grid>
      <Grid item xs={12} alignItems="center">
        <Button variant="outlined" onClick={() => signIn()}>
          Entrar
        </Button>
      </Grid>
    </Grid>
  );
}
