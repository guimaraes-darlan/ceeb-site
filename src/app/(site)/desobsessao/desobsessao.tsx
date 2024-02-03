"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../../components/title-page";
import ConsulteHorarios from "../../../components/consulte-horarios";
import Link from "next/link";

export default function DesobsessaoPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Tratamento de Desobsessão" />

      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography align="justify">
          O Tratamento de Desobsessão tem por objetivo o tratamento espiritual
          de desobsessão dos pacientes encaminhados pelo atendimento fraterno,
          de forma presencial ou à distância, buscando, desta forma, auxiliar
          encarnados e desencarnados envolvidos em processo de reajuste
          espiritual.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold">
          A Casa Espírita Eurípedes Barsanulpho realiza o Tratamento de
          Desobsessão às sextas-feiras, mediante agendamento prévio realizado
          através do Atendimento Fraterno.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Para mais informações sobre o Atendimento Fraterno clique{" "}
          <Link href="/horarios">aqui</Link>
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
