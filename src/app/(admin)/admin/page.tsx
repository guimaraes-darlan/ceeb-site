"use client";

import { Box, Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Admin() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ width: "100%", paddingTop: "5em" }}
    >
      <Typography variant="h4">Área Administrativa</Typography>
      <Button onClick={() => signIn()}>Login</Button>
    </Box>
  );
}
