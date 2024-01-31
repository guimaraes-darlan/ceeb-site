"use client";

import { AccessTime } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function ConsulteHorarios() {
  return (
    <>
      <Container sx={{ height: "1rem" }} />
      <Typography fontWeight="bold" align="center">
        Consulte nossos Horários
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <Button variant="outlined" startIcon={<AccessTime />}>
          <Link
            style={{ textDecoration: "none", color: "#4169E1" }}
            href="/horarios"
          >
            Horários
          </Link>
        </Button>
      </Container>
    </>
  );
}
