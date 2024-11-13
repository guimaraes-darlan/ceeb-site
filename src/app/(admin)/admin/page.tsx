"use client";

import { Box, Typography } from "@mui/material";

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
    </Box>
  );
}
